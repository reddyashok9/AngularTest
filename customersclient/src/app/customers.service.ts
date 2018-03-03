import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';

@Injectable()
export class CustomersService {

  customerUrl:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient,) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

}
