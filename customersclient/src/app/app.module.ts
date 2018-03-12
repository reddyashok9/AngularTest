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

import {MatStepperModule} from '@angular/material/stepper';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

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
    MatButtonModule,
    MatStepperModule,
    AsyncLocalStorageModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    CustomersComponent,
    CustomerDialogComponent
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
