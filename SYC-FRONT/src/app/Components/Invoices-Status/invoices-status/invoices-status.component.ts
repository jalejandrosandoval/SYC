import { Component, OnInit } from '@angular/core';
import { InvoicesStatusService } from 'src/app/Services/Invoices-Status/invoices-status.service';
import { InvoicesStatusModel } from 'src/app/Models/InvoicesStatus/invoices-status-model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoices-status',
  templateUrl: './invoices-status.component.html',
  styleUrls: ['./invoices-status.component.css']
})
export class InvoicesStatusComponent implements OnInit {

  _IInvoiceStatus: InvoicesStatusModel[];
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private invoiceStatusService: InvoicesStatusService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.invoiceStatusService.getInvoicesStatus()
      .subscribe(
        InvStatus_AWS=>  this._IInvoiceStatus = InvStatus_AWS,
        error => this.getError(error)
      );
  }

  getError(_Error){

    if (_Error && _Error.error) {
      
      return this.toastr.warning(_Error.error[""], "Error en la Carga de Datos");
      
    }
  }

}
