import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { TranslateService } from './translate/translate.service';
import { TranslateDirective } from './translate/translate.direttiva';


@NgModule({
  declarations: [
    AppComponent,
    TranslateDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
