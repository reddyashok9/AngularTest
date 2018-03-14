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

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MatSortModule, MatSort, MatPaginatorModule} from '@angular/material';

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
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MatSortModule,
    MatPaginatorModule
  ],
  entryComponents: [
    CustomersComponent,
    CustomerDialogComponent
  ],
  providers: [CustomersService, MatSort],
  bootstrap: [AppComponent]
})
export class AppModule { }
