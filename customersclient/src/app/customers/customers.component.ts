import { Component, OnInit, Inject } from '@angular/core';
import { CustomersService } from '../customers.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any;
  displayedColumns = ['id', 'name', 'username', 'email'];

  constructor(private cs: CustomersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cs.getCustomers().subscribe(customers => this.customers = customers)
  }

  openDialog(element){
    console.log(element);
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      data: element
    });
  }

  }

  @Component({
    selector: 'customer-dialog',
    templateUrl: 'customer-dialog.html',
  })
  export class CustomerDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  }