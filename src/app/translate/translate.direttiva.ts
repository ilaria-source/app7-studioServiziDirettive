import { TranslateService } from './translate.service';
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive (
  {
  selector: '[appTranslate]'
  })

export class TranslateDirective
{
  @Input() set appTranslate(textTranslate: string)
  {
    if(textTranslate !== '')
    {
      this.translateService.data
        .subscribe(res =>
        {
          const test = this.recomposeObj(res, textTranslate);
          if (test !== undefined)
          {
            this.renderer.setProperty(this.el.nativeElement, 'innetHTML', test);
          }
          else
          {
            this.renderer.setProperty(this.el.nativeElement, 'innetHTML', textTranslate);
          }
        });
    }
  }
      constructor(private translateService: TranslateService,
                private el: ElementRef,
                private renderer: Renderer2)
      {
      }
      // in angular 12 devo specificare il tipo di OGNI variabile anche in ingresso e dire cosa un metodo deve restituire
      recomposeObj(obj: any, strTest: string) : any
      {
        //separa usando come key il punto
        const parts = strTest.split('.');
        const newObj = obj[parts[0]];
        if (parts[1])
        {
          parts.splice(0, 1);
          const newString = parts.join('.');
          return this.recomposeObj(newObj, newString);
        }
      }
}
