import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Customer } from '../customer';

import { AngularFirestore } from 'angularfire2/firestore';

import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  customers: any = [];
  displayedColumns = ['name', 'address', 'email'];
  newElement: any = {edit: false, isNew: true, name: '', email: '', address: '' };
  dataSource = new CusDataSource(this.db);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private cs: CustomersService, public dialog: MatDialog, public db: AngularFirestore) { }

  ngOnInit() {
   // this.dataSource = this.customers;
    this.getData();
    this.customers = this.db.collection('customers').snapshotChanges().map(actions => {
      const countItems = actions.length;
      return actions.map(action => ({ uid: action.payload.doc.id, ...action.payload.doc.data() }));
  });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getData() {
    //  this.dataSource = this.cs.getCustomers();
  }

  deleteCus(element) {
    this.db.collection('customers').doc(element.uid).delete();
    return false;
  }

  openDialog(element, isNew) {
    console.log(element);
    // element.edit = true;
    if (isNew === true) {
      element = this.newElement;
    }

    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  }

  @Component({
    selector: 'app-customer-dialog',
    templateUrl: 'customer-dialog.html',
  })
  export class CustomerDialogComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor( private dialogRef: MatDialogRef<CustomerDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, public db: AngularFirestore, private _formBuilder: FormBuilder) { }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
        emailCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }

    addCus() {
      this.db.collection('customers').add(this.data);
      console.log(this.data);
      this.dialogRef.close();
    }
    updateCus() {
      this.db.collection('customers').doc(this.data.uid).update(this.data);
      console.log(this.data);
      this.dialogRef.close();
    }
  }

  export class CusDataSource extends DataSource<any> {
    constructor(public db: AngularFirestore) {
      super();
    }
    connect(): any {
      return this.db.collection('customers').snapshotChanges().map(actions => {
        const countItems = actions.length;
        return actions.map(action => ({ uid: action.payload.doc.id, ...action.payload.doc.data() }));
    });
    }
    disconnect() {}
  }

