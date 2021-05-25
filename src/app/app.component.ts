import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  button = {
    buttonUNO: 'button.ita',
    buttonDUE: 'button.eng'
  };

  constructor(private translateService: TranslateService)
  {
  }
  setLan(lan: string)
  {
    this.translateService.setLan(lan);
  }
}
