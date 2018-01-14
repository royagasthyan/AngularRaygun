import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { RaygunErrorHandler } from '../config/app.raygun.setup';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ 
    provide: ErrorHandler, 
    useClass: RaygunErrorHandler 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
