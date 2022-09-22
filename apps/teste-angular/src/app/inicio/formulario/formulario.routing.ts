import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
    children: [
      {
        path: '',
        component: FormularioComponent,
        data: {title: 'Formulário'},
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormularioRouting {}
