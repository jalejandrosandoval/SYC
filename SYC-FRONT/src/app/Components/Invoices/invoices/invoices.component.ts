import { Component, OnInit } from '@angular/core';
import { InvoicesModel } from 'src/app/Models/Invoices/invoices-model';
import { InvoicesService } from 'src/app/Services/Invoices/invoices.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoicesStatusService } from 'src/app/Services/Invoices-Status/invoices-status.service';
import { ClientsService } from 'src/app/Services/Clients/clients.service';
import { ClientsModel } from 'src/app/Models/Clients/clients-model';
import { InvoicesStatusModel } from 'src/app/Models/InvoicesStatus/invoices-status-model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  _IInvoice: InvoicesModel[];
  _InvoiceSelected: InvoicesModel;
  _InvoiceStatus: InvoicesStatusModel;
  _Client: ClientsModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private invoiceService: InvoicesService,
    private invoiceStatusService: InvoicesStatusService,
    private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getData();
  }

  InvoiceViewForm = this.formBuilder.group({
    id_Factura: [''],
    codeStatus: [''],
    valor: [''],
    fechaFac: [''],
    status: [''],
    nameClient: [''],
    numberDocument: ['']
  });

  getData(){

    this.invoiceService.getInvoices()
      .subscribe(
        Inv_AWS =>  this._IInvoice = Inv_AWS ,
        error => this.getError(error)
      );

  }

  getDataByIdModal(_IInvoice: InvoicesModel){

    var Id_Inv = _IInvoice.id_Factura;
    var Id_InvStatus = _IInvoice.codeStatus;
    var Id_Client = _IInvoice._IdClient;

    this.clientsService.getClientsById(Id_Client).subscribe(
      res=>
      {
        this._Client = res,
        error => this.getError(error) 
      }
    )

    this.invoiceStatusService.getInvoicesStatusById(Id_InvStatus).subscribe(
      res=>
      {
        this._InvoiceStatus = res,
        error => this.getError(error) 
      }
    )

    this.invoiceService.getInvoicesById(Id_Inv).subscribe(
      res => 
      {
        this._InvoiceSelected =  res,
        this.InvoiceViewForm = this.formBuilder.group({
          id_Factura: [this._InvoiceSelected.id_Factura],
          fechaFac: [this._InvoiceSelected.fechaFac],
          valor: [this._InvoiceSelected.valor],
          status: [this._InvoiceStatus.description],
          nameClient: [this._Client.nombre],
          numberDocument: [this._Client.numeroDoc],
        }),
        error => this.getError(error) 
      }
    );

  }
  
  preUpdate(_IInvoice: InvoicesModel){

    var IdInvo= _IInvoice.id_Factura;

    var ruta = `invoices/edit/`;

    this.router.navigateByUrl(ruta + `${IdInvo}`);
  }

  preDelete(_IInvoice: InvoicesModel){
    this.invoiceService.deleteInvoices(_IInvoice.id_Factura).subscribe(
      res =>
      {
        location.reload(),
        this.toastr.warning("Eliminación de Facturas")
      }
    );

  }

  getError(_Error){

    if (_Error && _Error.error) {
      
      return this.toastr.warning(_Error.error[""], "Error en la Carga de Datos");
      
    }
  }

}
