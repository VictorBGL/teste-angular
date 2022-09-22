import { NgModule } from "@angular/core";
import { PublicComponent } from "./public.component";
import { PublicRouting } from "./public.routing";


@NgModule({
  declarations: [PublicComponent],
  imports: [PublicRouting],
  providers: [],
})
export class PublicModule {}
