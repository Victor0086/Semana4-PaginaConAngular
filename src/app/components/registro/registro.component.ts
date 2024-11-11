import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombreCompleto = '';
  nombreUsuario = '';
  email = '';
  password = '';
  confirmPassword = '';
  fechaNacimiento: string = '';
  direccion = '';

  categorias = ['Acción', 'Terror', 'Aventura', 'Deporte'];
  usuarioRegistrado = false;

  // para manejar el registro
  registrarUsuario(): void {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Asigna el nombre de usuario al iniciar sesión
    this.nombreUsuario = this.nombreUsuario || 'Usuario Desconocido';

    // Lógica para enviar datos a un servicio de registro
    alert('Registro exitoso');
    this.usuarioRegistrado = true;
  }
}
