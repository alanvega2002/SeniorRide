import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  users :any[]=[]; //Para almacenar los usuarios
  message : string =""; // Para mostrar mensajes al usuario
  

  constructor(private api:ApiService) {}

  ngOnInit() {
      this.api.getRandomUsers(1).subscribe(
        (res)=>{
          this.users = res.results; // results es el objeto tipo JSON que nos entrega la api randomusers
          this.message = "El usuario a cargado con exito";
        },
        (error)=>{
          this.message = "Error al cargar usuario";
          console.log(error);
        }
      ); 
  }
}
