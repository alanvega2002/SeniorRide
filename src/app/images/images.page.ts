import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, } from '@capacitor/camera';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  batteryLevel: number = 0;
  batteryColor: string = 'green';
  imageUrl: string | null = null;

  constructor() {
    this.checkBatteryStatus();
  }

  async openCamera(){

    try{
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      this.imageUrl = image.webPath ?? null;
    }catch(error){
      console.error('Error al abrir la camara: ', error);
    }
  }
  async checkBatteryStatus(){

    if('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        this.batteryLevel = battery.level * 100;

        //Cambiar el color segun el nivel de bateria
        this.updateBatteryColor();

        //Estar pendiente del estado de la bateria
        battery.onlevelchange = ()=>{

          this.batteryLevel = battery.level *100;
          this.updateBatteryColor();
        };
      }catch(error){
        console.error('Error al obtener el estado de la bateria: ', error);
      }
    }else{
      console.error(' Battery Status no es compatible con este dispositivo');
    }

  }

  //Cambiar el color del texto segun el estado de la bateria
  updateBatteryColor(){
    if(this.batteryLevel<=20){
      this.batteryColor= 'red';
    }else if (this.batteryLevel<=50){
      this.batteryColor='orange';
    }else{
      this.batteryColor='green';
    }
  }
  ngOnInit() {
  }
}