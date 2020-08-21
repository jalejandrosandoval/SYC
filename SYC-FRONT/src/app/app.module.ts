import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Components/Menu/navbar/navbar.component';
import { HomeComponent } from './Components/Menu/home/home.component';

import { InvoicesComponent } from './Components/Invoices/invoices/invoices.component';
import { InvoicesCreateComponent } from './Components/Invoices/invoices-create/invoices-create.component';
import { InvoicesEditComponent } from './Components/Invoices/invoices-edit/invoices-edit.component';

import { InvoicesStatusComponent } from './Components/Invoices-Status/invoices-status/invoices-status.component';
import { InvoicesStatusCreateComponent } from './Components/Invoices-Status/invoices-status-create/invoices-status-create.component';
import { InvoicesStatusEditComponent } from './Components/Invoices-Status/invoices-status-edit/invoices-status-edit.component';

import { ClientsComponent } from './Components/Clients/clients/clients.component';
import { ClientsCreateComponent } from './Components/Clients/clients-create/clients-create.component';
import { ClientsEditComponent } from './Components/Clients/clients-edit/clients-edit.component';
import { FooterComponent } from './Components/Menu/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
