import { SharedModule } from 'libs/components/src/lib/shared.module';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [SharedModule],
  exports: [MenuComponent],
  providers: [],
})
export class MenuModule { }
