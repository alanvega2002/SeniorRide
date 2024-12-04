import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.page.html',
  styleUrls: ['./solicitar-viaje.page.scss'],
})
export class SolicitarViajePage implements OnInit {
  map!: L.Map;
  marker!: L.Marker;
  origen: string = '';
  destino: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    // Coordenadas iniciales de Puerto Montt, Chile
    const lat = -41.4693;
    const lng = -72.9424;

    // Crea el mapa en Puerto Montt
    this.map = L.map('map').setView([lat, lng], 13);

    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Agregar marcador inicial en Puerto Montt
    this.marker = L.marker([lat, lng], {
      draggable: true // Permite arrastrar el marcador
    }).addTo(this.map);

    // Evento cuando se arrastra el marcador
    this.marker.on('dragend', () => {
      const position = this.marker.getLatLng();
      console.log('Nueva posición:', position);
    });

    // Evento de clic en el mapa
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.marker.setLatLng([lat, lng]);
      console.log('Posición seleccionada:', { lat, lng });
    });
  }

  // Función para buscar dirección
  async buscarDireccion(texto: string) {
    if (!texto) return; // Si el texto está vacío, no hacemos nada
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(texto)}`
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        this.map.setView([parseFloat(lat), parseFloat(lon)], 16);
        this.marker.setLatLng([parseFloat(lat), parseFloat(lon)]);
      }
    } catch (error) {
      console.error('Error al buscar dirección:', error);
    }
  }

  // Función para solicitar el viaje
  solicitarViaje() {
    console.log('Origen:', this.origen);
    console.log('Destino:', this.destino);
    console.log('Posición actual del marcador:', this.marker.getLatLng());
  }

  // Función para volver al Home
  volverAlHome() {
    this.router.navigate(['/home']); // Redirige al usuario a la página de inicio
  }
}
