
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { LoginModel } from "@teste-angular/data";
import { LoginFormGroup } from "@teste-angular/forms";
import { concat } from "rxjs";


@Component({
  selector: 'teste-angular-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {

  rams: any = {
    ram1: false,
    ram2: false,
    ram3: false,
    ram4: false,
    ram5: false,
    ram6: false,
  }
  ram: boolean = false;

  form = new LoginFormGroup();

  loginValido: LoginModel =  {
    email: "victor.lino@treeinova.com",
    senha: "Teste@123"
  }

  constructor(private router: Router){
  }

  login() {
    if(this.form.valid) {
      if(this.form.email.value == this.loginValido.email) {
        if(this.form.senha.value == this.loginValido.senha) {
          this.router.navigate(['/inicio/formulario']);
        } else {
          alert('senha incorreta');
        }
      } else {
        alert('email incorreto');
      }
    }
  }

  ativaRam() {
    this.rams.ram2 = true
    setTimeout(() => this.rams.ram1 = true, 2000);
    setTimeout(() => this.rams.ram3 = true, 1000);
    setTimeout(() => this.rams.ram4 = true, 3000);
    setTimeout(() => this.rams.ram5 = true, 4000);
    setTimeout(() => this.rams.ram6 = true, 5000);

    this.desativaRam();
  }

  desativaRam() {
    setTimeout(() => this.rams.ram2 = false, 10000);
    setTimeout(() => this.rams.ram1 = false, 10000);
    setTimeout(() => this.rams.ram3 = false, 10000);
    setTimeout(() => this.rams.ram4 = false, 10000);
    setTimeout(() => this.rams.ram5 = false, 10000);
    setTimeout(() => this.rams.ram6 = false, 10000);
  }
}
