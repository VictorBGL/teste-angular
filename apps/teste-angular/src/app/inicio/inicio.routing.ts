import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'formulario',
        loadChildren: () => import('../inicio/formulario/formulario.module').then(x => x.FormularioModule),
        data: { title: 'Formulário' },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InicioRouting {}
