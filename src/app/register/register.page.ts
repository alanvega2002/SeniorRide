import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  email: string = ''; // Agrega el campo de email

  constructor(
    private router: Router,
    private alertController: AlertController,
    private localStorageService: LocalStorageService
  ) {}

  // Método para registrar un nuevo usuario
  async register() {
    // Obtiene la lista de usuarios guardados en localStorage o crea una lista vacía si no existe
    const users: any[] = JSON.parse(this.localStorageService.getItem('users')) || [];

    // Verifica si el nombre de usuario o el correo ya existen en la lista de usuarios
    if (users.some((user: any) => user.username === this.username || user.email === this.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre de usuario o correo electrónico ya existen. Por favor elige otros.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Agrega el nuevo usuario a la lista y guárdalo en localStorage
      users.push({ username: this.username, password: this.password, email: this.email });
      this.localStorageService.setItem('users', JSON.stringify(users));

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Usuario registrado exitosamente.',
        buttons: ['OK']
      });
      await alert.present();

      // Redirige al usuario a la página de inicio de sesión después de registrarse
      this.router.navigate(['/login']);
    }
  }

  // Método para regresar a la página de inicio de sesión
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
