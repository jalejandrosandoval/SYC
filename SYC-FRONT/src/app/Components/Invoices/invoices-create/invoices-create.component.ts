import { Component, OnInit } from '@angular/core';
import { InvoicesService } from 'src/app/Services/Invoices/invoices.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InvoicesStatusService } from 'src/app/Services/Invoices-Status/invoices-status.service';
import { InvoicesStatusModel } from 'src/app/Models/InvoicesStatus/invoices-status-model';
import { ClientsModel } from 'src/app/Models/Clients/clients-model';
import { ClientsService } from 'src/app/Services/Clients/clients.service';

@Component({
  selector: 'app-invoices-create',
  templateUrl: './invoices-create.component.html',
  styleUrls: ['./invoices-create.component.css']
})
export class InvoicesCreateComponent implements OnInit {

  _IClient: ClientsModel[];
  _ClientSelected: ClientsModel;
  _IInvoicesStatus: InvoicesStatusModel[];

  constructor(private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private clientService: ClientsService,
    private inoviceService: InvoicesService,
    private inoviceStatusService: InvoicesStatusService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStatuses();
    this.getClients();
  }

  InvoiceCreateForm = this.formBuilder.group({
    id_Client: [''],
    id_Factura: [''],
    numeroDoc: [''],
    fechaFac: [''],
    valor: [''],
    status: ['']
  });

  getStatuses(){
    this.inoviceStatusService.getInvoicesStatus()
      .subscribe(
        InvoiceStatus_AWS => this._IInvoicesStatus = InvoiceStatus_AWS,
        error => this.getError(error)
    );

  }

  getClients(){
    this.clientService.getClients().subscribe(
      Client_AWS => this._IClient = Client_AWS,
      error => this.getError(error)
    )
  }

  getClientSelected(client: ClientsModel){
    var idClient = client.id_Client;

    this.clientService.getClientsById(idClient).subscribe(
      res =>
      {
        this._ClientSelected = res,
        this.InvoiceCreateForm =  this.formBuilder.group({
          id_Client: [this._ClientSelected.id_Client],
          numeroDoc: [this._ClientSelected.numeroDoc]
        })
      }
    );
  }
  
  onCreate(){

  }

  
  getError(_Error){

    if (_Error && _Error.error) {

      this.InvoiceCreateForm.reset;
      
      return this.toastr.warning(_Error.error[""], "Error al Actualizar Tipo de Usuarios!");
      
    }
   
  }
}
