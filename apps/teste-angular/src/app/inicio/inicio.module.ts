import { NgModule } from '@angular/core';
import { HeaderModule, MenuModule, SharedModule } from '@teste-angular/components';
import { InicioComponent } from './inicio.component';
import { InicioRouting } from './inicio.routing';


@NgModule({
  declarations: [InicioComponent],
  imports: [InicioRouting, SharedModule, MenuModule, HeaderModule],
  providers: [],
})
export class InicioModule { }
