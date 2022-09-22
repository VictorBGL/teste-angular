import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@teste-angular/components';


@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule { }
