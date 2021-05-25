import { Injectable, EventEmitter} from  "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable()

export class TranslateService {
  data = new EventEmitter<any>();

  constructor(private httpClient: HttpClient)
  {
    this.httpClient.get<any>('assets/ita.json')
      .subscribe(data => {
        this.data.emit(data);
      });
  }
  setLan(lan: string)
  {
    this.httpClient.get<any>('assets/' + lan + '.json')
    .subscribe(data =>
    {
      this.data.emit(data);
    });
  }
}
