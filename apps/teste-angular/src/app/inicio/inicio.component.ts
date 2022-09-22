import { Component } from "@angular/core";
import { MenuModel } from "@teste-angular/components";
import { grupos } from "./menu";

@Component({
  selector: 'teste-angular-inicio',
  templateUrl: 'inicio.component.html'
})

export class InicioComponent {

  menu: MenuModel[] = grupos;

}
