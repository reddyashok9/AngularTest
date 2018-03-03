import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CustomersService } from './customers.service';
import { CustomersComponent, CustomerDialogComponent } from './customers/customers.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule
  ],
  entryComponents: [
    CustomersComponent,
    CustomerDialogComponent
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
