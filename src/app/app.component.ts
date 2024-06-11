import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './_Core/Translation/translation.service';
import { NavbarTopComponent } from './_Core/Components/navbar-top/navbar-top.component';
import { NavbarSideComponent } from './_Core/Components/navbar-side/navbar-side.component';
import { HomeComponent } from './Modules/home/home.component';
import { ParentComponent } from './Modules/parent/parent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarSideComponent,NavbarTopComponent,HomeComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userName:string | null = null;

  ngOnInit(){

    if (this.userName) {
      console.log("have value");
    }else{
      console.log("null or undefind");

    }
  }
  // constructor(private translate: TranslateService,private translationService: TranslationService) {
  //   //this.translate.setDefaultLang('th'); // Set the default language
  // }
  // ngOnInit() {
  //   // Load the module-specific translations
  //   this.translationService.setModuleTranslations('th', 'Authen/login');
  // }

}

export class UserDto{
  userName:string | null = null;
  userTest:string | undefined;
}