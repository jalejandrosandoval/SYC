import { Component, OnInit } from '@angular/core';
import { InvoicesModel } from 'src/app/Models/Invoices/invoices-model';
import { InvoicesService } from 'src/app/Services/Invoices/invoices.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  _IInvoice: InvoicesModel[];
  _InvoiceSelected: InvoicesModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.getData();
  }

  InvoiceViewForm = this.formBuilder.group({
    id_Factura: [''],
    codeStatus: [''],
    valor: ['']
  });

  getData(){

    this.invoiceService.getInvoices()
      .subscribe(
        Inv_AWS =>  this._IInvoice = Inv_AWS ,
        error => this.getError(error)
      );

  }
  
  getError(_Error){

    if (_Error && _Error.error) {
      
      return this.toastr.warning(_Error.error[""], "Error en la Carga de Datos");
      
    }
  }

}
