import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.setDefaultLang('en');
  }

  public changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  public loadModuleTranslations(lang: string, moduleName: string): Observable<any> {
    const path = `/assets/i18n/${lang}/${moduleName}.json`;
    return this.http.get(path);
  }

  public setModuleTranslations(lang: string, moduleName: string): void {
    this.loadModuleTranslations(lang, moduleName).subscribe(translations => {
      this.translate.setTranslation(lang, translations, true);
      this.translate.use(lang);
    });
  }
}
