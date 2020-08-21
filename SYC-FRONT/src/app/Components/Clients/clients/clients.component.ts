import { Component, OnInit } from '@angular/core';
import { ClientsModel } from 'src/app/Models/Clients/clients-model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/Services/Clients/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  _IClient: ClientsModel [];
  _ClientSelected: ClientsModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private ClientService: ClientsService) { }

  ngOnInit(): void {
    this.getData();    
  }

  //Getting Employees Informations from WebAPI

  getData() {
    this.ClientService
      .getClients()
      .subscribe(Client_AWS => this._IClient = Client_AWS,
        error => this.getError(error)
        );
  }

  ClientsViewForm = this.formBuilder.group({
    codigo: [''],
    descripcion: [''],
    valor: ['']
  });

  
  getDataByIdModal(_IClient: ClientsModel){

    var _Codigo= _IClient.id_Client;

    this.ClientService.getClientsById(_Codigo).subscribe(
      res => 
      {
        this._ClientSelected =  res,
        this.ClientsViewForm = this.formBuilder.group({
          id_Client: [this._ClientSelected.id_Client],
          numeroDoc: [this._ClientSelected.numeroDoc],
          nombre: [this._ClientSelected.nombre],
          direccion: [this._ClientSelected.direccion]
        }),
        error => this.getError(error) 
      }
    );   

  }

  preUpdate(_IClient: ClientsModel){

    var codigo = _IClient.id_Client;

    var ruta = `clients/edit/`;

    this.router.navigateByUrl(ruta + `${codigo}`);
  }

  preDelete(_IClient: ClientsModel){

    this.ClientService.deleteClients(_IClient.id_Client).subscribe(
      res =>
      {
        this.toastr.show("¡Eliminación Exitosa!", "Eliminación de Clientes:")
      }
    );
    location.reload();
  }

  getError(_Error){

    if (_Error && _Error.error) {
      
      return this.toastr.warning(_Error.error[""], "Error en la Carga de Datos");
      
    }
  }


}
