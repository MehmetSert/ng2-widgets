import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  data: any = {};

  constructor(
    private http: HttpClient
  ) { }

  use(lang: string): Promise<{}> {
    console.log(lang);
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/i18n.json`;

      this.http.get<{}>(langPath).subscribe(
        translation => {
          // console.log(translation);
          Object.keys(translation).forEach((key) => {
            translation[key] = translation[key][lang];
          });
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          console.log(error);
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }

}
