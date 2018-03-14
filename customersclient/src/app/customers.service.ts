import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Customer } from './customer';
import { AsyncLocalStorage } from 'angular-async-local-storage';


@Injectable()
export class CustomersService {

  customers: Observable<any>;

  constructor(private http: HttpClient, protected localStorage: AsyncLocalStorage) { }

  getCustomers(): Observable<Customer[]> {
     return this.customers;
    // return this.http.get<Customer[]>(this.customerUrl);
  }

  addCustomers(item) {
    // return this.localStorage.getItem<Customer[]>('customer');
    const custo: any = { name: item.name, email: item.email, address: item.address };
    console.log(custo);
    this.customers.subscribe();
  }

  updateCustomers(item) {
    // return this.localStorage.getItem<Customer[]>('customer');
    const custo: any = { name: item.name, email: item.email, address: item.address };
    console.log(custo);
    // this.customers.push(custo);
  }


}
