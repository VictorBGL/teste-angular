
import { NgModule } from "@angular/core";
import { SharedModule } from '@teste-angular/components';
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";


@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRouting, SharedModule],
  providers: []
})

export class LoginModule{}
