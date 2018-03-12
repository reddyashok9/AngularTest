import { Component, OnInit, Inject } from '@angular/core';
import { CustomersService } from '../customers.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any = [];
  displayedColumns = ['name', 'address', 'email'];
  newElement: any = {name: '', email: '', address: '' };

  constructor(private cs: CustomersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.cs.getCustomers().subscribe(customers => {
      if (customers) {
        this.customers = [customers];
      } else {}
    }
      );
  }

  openDialog(element) {
    console.log(element);
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
      @Inject(MAT_DIALOG_DATA) public data: any, private cs: CustomersService, private _formBuilder: FormBuilder) { }

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
      this.cs.addCustomers(this.data);
      console.log(this.data);
      this.dialogRef.close();
    }
  }
