import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientsModel } from 'src/app/Models/Clients/clients-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  _IClients: ClientsModel[];

  readonly ApiPath= '/API/Clients';

  constructor(private http: HttpClient) {
  }

  //Getting ClientData through httpClient of Angular -> ApiPath 

  getClients(): Observable<ClientsModel[]>{
    return this.http.get<ClientsModel[]>(this.ApiPath);  
  }

  getClientsById(Id: Number): Observable<ClientsModel>{
    return this.http.get<ClientsModel>(`${this.ApiPath}/${Id}`);
  }

  postClients(_IClientModel: ClientsModel): Observable<ClientsModel>{
    return this.http.post<ClientsModel>(this.ApiPath, _IClientModel)
      .pipe(
        map(Client => {
          return Client;
        }
      ));
  }

  putClients(_IClientModel: ClientsModel): Observable<ClientsModel>{
    return this.http.put<ClientsModel>(`${this.ApiPath}/${_IClientModel.id_Client}`,  _IClientModel);
  }
  
  deleteClients(IdEmpDelete : number): Observable<any>{
    return this.http.delete<any>(`${this.ApiPath}/${IdEmpDelete}`);
  }

}
