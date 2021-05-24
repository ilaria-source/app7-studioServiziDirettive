import { TranslateService } from './translate.service';
import { Directive } from '@angular/core';

@Directive (
  {
  selector: '[appTranslate]'
  })

export class TranslateDirective
{
    constructor(private translateService: TranslateService)
    {

    }
}

