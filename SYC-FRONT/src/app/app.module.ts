//MODULES
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//TOASTR
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './Components/Menu/navbar/navbar.component';
import { HomeComponent } from './Components/Menu/home/home.component';
import { FooterComponent } from './Components/Menu/footer/footer.component';

import { InvoicesComponent } from './Components/Invoices/invoices/invoices.component';
import { InvoicesCreateComponent } from './Components/Invoices/invoices-create/invoices-create.component';
import { InvoicesEditComponent } from './Components/Invoices/invoices-edit/invoices-edit.component';

import { InvoicesStatusComponent } from './Components/Invoices-Status/invoices-status/invoices-status.component';
import { InvoicesStatusCreateComponent } from './Components/Invoices-Status/invoices-status-create/invoices-status-create.component';
import { InvoicesStatusEditComponent } from './Components/Invoices-Status/invoices-status-edit/invoices-status-edit.component';

import { ClientsComponent } from './Components/Clients/clients/clients.component';
import { ClientsCreateComponent } from './Components/Clients/clients-create/clients-create.component';
import { ClientsEditComponent } from './Components/Clients/clients-edit/clients-edit.component';

import { DiagramationComponent } from './Components/Diagramation/diagramation/diagramation.component';
import { ClientsService } from './Services/Clients/clients.service';
import { InvoicesService } from './Services/Invoices/invoices.service';
import { InvoicesStatusService } from './Services/Invoices-Status/invoices-status.service';
import { ErrorInterceptorService } from './Services/Auth/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    InvoicesCreateComponent,
    InvoicesEditComponent,
    InvoicesStatusComponent,
    InvoicesStatusCreateComponent,
    InvoicesStatusEditComponent,
    NavbarComponent,
    ClientsComponent,
    ClientsCreateComponent,
    ClientsEditComponent,
    HomeComponent,
    FooterComponent,
    DiagramationComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]), 
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: "toast-top-right"
    }),
    HttpClientModule    
  ],
  providers: [
    ClientsService, 
    InvoicesService, 
    InvoicesStatusService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptorService, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
