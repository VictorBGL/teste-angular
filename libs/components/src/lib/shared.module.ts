import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const MODULES = [
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  CommonModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }
