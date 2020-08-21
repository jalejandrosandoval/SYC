import { Injectable } from '@angular/core';
import { InvoicesModel } from 'src/app/Models/Invoices/invoices-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  _IInvoices: InvoicesModel[];

  readonly ApiPath= '/API/Invoices';

  constructor(private http: HttpClient) {
  }

  //Getting ClientData through httpClient of Angular -> ApiPath 

  getInvoices(): Observable<InvoicesModel[]>{
    return this.http.get<InvoicesModel[]>(this.ApiPath);  
  }

  getInvoicesById(Id: Number): Observable<InvoicesModel>{
    return this.http.get<InvoicesModel>(`${this.ApiPath}/${Id}`);
  }

  postInvoices(_IInvoiceModel: InvoicesModel): Observable<InvoicesModel>{
    return this.http.post<InvoicesModel>(this.ApiPath, _IInvoiceModel)
      .pipe(
        map(Client => {
          return Client;
        }
      ));
  }

  putInvoices(_IInvoiceModel: InvoicesModel): Observable<InvoicesModel>{
    
    return this.http.put<InvoicesModel>(`${this.ApiPath}/${_IInvoiceModel.id_Factura}`,  _IInvoiceModel);
  }
  
  deleteInvoices(IdInvDelete : number): Observable<any>{
    return this.http.delete<any>(`${this.ApiPath}/${IdInvDelete}`);
  }

}