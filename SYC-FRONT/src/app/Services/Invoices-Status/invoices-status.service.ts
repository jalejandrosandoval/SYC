import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InvoicesStatusModel } from 'src/app/Models/InvoicesStatus/invoices-status-model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesStatusService {

  _IInvoiceStatus: InvoicesStatusModel[];
  
  readonly ApiPath= '/API/Invoice_Status';

  constructor(private http: HttpClient) {

  }

  //Getting ClientData through httpClient of Angular -> ApiPath 

  getInvoicesStatus(): Observable<InvoicesStatusModel[]>{
    return this.http.get<InvoicesStatusModel[]>(this.ApiPath);  
  }

}
