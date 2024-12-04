import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Nueva propiedad

  constructor(
    public router: Router, // Cambiado a public
    private alertController: AlertController,
    private localStorageService: LocalStorageService
  ) {}

  async login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    const users: any[] = JSON.parse(this.localStorageService.getItem('users')) || [];
    const user = users.find(
      (user: any) => user.username === this.username && user.password === this.password
    );

    if (user) {
      this.localStorageService.setItem('userToken', 'sample-token');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }

  async recoverPassword() {
    await this.presentAlert('Recuperar Contraseña', 'Enviaremos un enlace de recuperación a tu correo.');
  }

  async resetPassword() {
    await this.presentAlert('Restablecer Contraseña', 'Por favor, contacta con el administrador.');
  }

  register() {
    this.router.navigate(['/register']);
  }

  private async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}