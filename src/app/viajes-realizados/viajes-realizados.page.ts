import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes-realizados',
  templateUrl: './viajes-realizados.page.html',
  styleUrls: ['./viajes-realizados.page.scss']
})
export class ViajesRealizadosPage {
  viajes = [
    { destino: 'Centro de la Ciudad', fecha: '2024-10-25', hora: '10:30 AM', precio: '$5.000', estado: 'Completado', calificacion: 0 },
    { destino: 'Aeropuerto Internacional', fecha: '2024-10-24', hora: '3:00 PM', precio: '$15.000', estado: 'Completado', calificacion: 0 },
    { destino: 'Plaza Principal', fecha: '2024-10-22', hora: '1:15 PM', precio: '$3.500', estado: 'Completado', calificacion: 0 },
    { destino: 'Centro Comercial', fecha: '2024-10-20', hora: '12:00 PM', precio: '$4.500', estado: 'Completado', calificacion: 0 },
    { destino: 'Parque Central', fecha: '2024-10-18', hora: '4:30 PM', precio: '$2.500', estado: 'Completado', calificacion: 0 },
    { destino: 'Museo de Historia', fecha: '2024-10-16', hora: '2:45 PM', precio: '$6.000', estado: 'Completado', calificacion: 0 }
  ];

  constructor(private router: Router) {}

  // Método para calificar el viaje
  calificarViaje(viaje: any, calificacion: number) {
    viaje.calificacion = calificacion;
  }

  // Método para volver a la página de inicio
  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
