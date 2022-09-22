import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@teste-angular/components';
import { FormularioRouting } from './formulario.routing';


@NgModule({
  declarations: [FormularioComponent],
  imports: [FormularioRouting, SharedModule],
  providers: [],
})
export class FormularioModule { }
