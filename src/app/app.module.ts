import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';

//components
import { AppComponent } from './app.component';

//services
import { PartsService } from './shared/services/parts.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NoopAnimationsModule
  ],
  providers: [PartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
