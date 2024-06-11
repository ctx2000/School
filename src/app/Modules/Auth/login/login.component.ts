import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../_Core/Translation/translation.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordModule, CheckboxModule, RouterLink, CommonModule, RippleModule, ButtonModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  lang: string = "en";
  selectedLang:string | null = localStorage.getItem('language');
  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    if (this.selectedLang) {
      this.translationService.setModuleTranslations(this.selectedLang, 'Authen/login');
    } else {
      this.translationService.setModuleTranslations(this.lang, 'Authen/login');
    }
  }

  switchLanguage(language: string) {
    localStorage.setItem('language', language);
    this.selectedLang = language;
    this.translationService.setModuleTranslations(language, 'Authen/login');
  }
}
