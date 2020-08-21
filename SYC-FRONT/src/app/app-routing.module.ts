import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { DiagramationComponent } from './Components/Diagramation/diagramation/diagramation.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},

  { path: 'diagramation',  component: DiagramationComponent},

  { path: 'invoices',  component: InvoicesComponent },
  { path: 'invoices/create',  component: InvoicesCreateComponent },
  { path: 'invoices/edit/:idInvo',  component: InvoicesEditComponent },

  { path: 'invoices-status',  component: InvoicesStatusComponent },
  { path: 'invoices-status/create',  component: InvoicesStatusCreateComponent },
  { path: 'invoices-status/edit/:codigo',  component: InvoicesStatusEditComponent },

  { path: 'clients',  component: ClientsComponent },
  { path: 'clients/create',  component: ClientsCreateComponent },
  { path: 'clients/edit/:codigo',  component: ClientsEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
