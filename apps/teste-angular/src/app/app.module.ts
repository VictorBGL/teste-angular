import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from 'libs/components/src/lib/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouting, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
