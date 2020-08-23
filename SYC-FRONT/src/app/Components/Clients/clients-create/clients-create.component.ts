import { Component, OnInit } from '@angular/core';
import { ClientsModel } from 'src/app/Models/Clients/clients-model';
import { ClientsService } from 'src/app/Services/Clients/clients.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private clientService: ClientsService) { }

  ngOnInit(): void {
  }

  ClientsCreateForm = this.formBuilder.group({
    numeroDoc: [''],
    nombre: [''],
    direccion: ['']
  });

  onCreate(){

      this.clientService.postClients(this.ClientsCreateForm.value)
        .subscribe(  
        res => {
          this.toastr.success("¡Creación Exitosa!", "Clientes:"), 
          this.ClientsCreateForm.reset(),
          this.router.navigate(["/clients"]);
        },
        error => this.getError(error)  
        );

        console.log(Object.values(this.ClientsCreateForm));
  }
  
  get ClientCreateFormData() { 
    return this.ClientsCreateForm.controls; 
  }

  getError(_Error){

    if (_Error && _Error.error) {

      this.ClientsCreateForm.reset;
      
      return this.toastr.warning(_Error.error[""], "Error Creación de Clientes");
      
    }
   
  }

}
