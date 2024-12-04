import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  username: string = '';
  email: string = '';
  newPassword: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  // Método para recuperar la contraseña
  async recoverPassword() {
    // Obtiene la lista de usuarios guardados en localStorage
    const users = JSON.parse(this.localStorageService.getItem('users')) || [];

    // Busca el usuario en la lista según el nombre de usuario y correo electrónico
    const userIndex = users.findIndex(
      (user: any) => user.username === this.username && user.email === this.email
    );

    if (userIndex !== -1) {
      // Actualiza la contraseña del usuario
      users[userIndex].password = this.newPassword;
      this.localStorageService.setItem('users', JSON.stringify(users));

      // Muestra una alerta de éxito
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Contraseña actualizada correctamente.',
        buttons: ['OK']
      });
      await alert.present();

      // Redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      // Muestra una alerta de error si el usuario no existe o los datos son incorrectos
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Nombre de usuario o correo electrónico incorrecto.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

