import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  constructor(private translateService: TranslateService)
  {
  }
  setLan(lan: string)
  {
    this.translateService.setLan(lan);
  }
}
