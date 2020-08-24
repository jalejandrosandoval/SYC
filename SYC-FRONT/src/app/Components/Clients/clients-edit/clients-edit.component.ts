import { Component, OnInit } from '@angular/core';
import { ClientsModel } from 'src/app/Models/Clients/clients-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/Services/Clients/clients.service';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  _SelectedClients: ClientsModel;

  constructor(private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private clientService: ClientsService,
    private route: ActivatedRoute,
    private router: Router) {

    }

  ngOnInit(): void {

    const UTypeId = this.route.snapshot.params['id_Client'];

    this.setForm(UTypeId);

  }

  ClientsEditForm =this.formBuilder.group({
    id_Client: [''],
    numeroDoc: [''],
    nombre: [''],
    direccion: [''],
  });

  private setForm(ClientId: Number){

    this.clientService.getClientsById(ClientId).subscribe(
      res => 
      {
        this._SelectedClients = res,
        this.ClientsEditForm = this.formBuilder.group({
          id_Client: [this._SelectedClients.id_Client],
          numeroDoc: [this._SelectedClients.numeroDoc,{
            Validators: [Validators.required]
          }],
          nombre: [this._SelectedClients.nombre, {
            Validators: [Validators.required]
          }],
          direccion: [this._SelectedClients.direccion, {
            Validators: [Validators.required]
          }]
        })
      }
    );
      
  }

  get ClientsEditFormData() { 
    return this.ClientsEditForm.controls; 
  }
  
  onEdit(){

    if (this.ClientsEditForm.invalid) {

      return;
    
    }else{
      
      this.clientService.putClients(this.ClientsEditForm.value).subscribe(
        res => {
          this.toastr.info("¡Actualización Exitosa!", "Clientes:"),
          this.router.navigateByUrl("clients")
        },
        error => this.getError(error), 
      );

    }

  }

  getError(_Error){

    if (_Error && _Error.error) {

      this.ClientsEditForm.reset;
      
      return this.toastr.warning(_Error.error[""], "Error al Actualizar Tipo de Usuarios!");
      
    }
   
  }

}
