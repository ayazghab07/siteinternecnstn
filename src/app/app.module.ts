import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TabdscformsComponent } from './tabdscforms/tabdscforms.component';
import { CategoriesComponent } from './categories/categories.component';
import { LiensComponent } from './liens/liens.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PclaComponent } from './pcla/pcla.component';
import { IntroComponent } from './intro/intro.component';
import { CnstnComponent } from './cnstn/cnstn.component';
import { MyfoterComponent } from './myfoter/myfoter.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    TabdscformsComponent,
    CategoriesComponent,
    LiensComponent,
    AcceuilComponent,
    PclaComponent,
    IntroComponent,
    CnstnComponent,
   
    MyfoterComponent,
    
    
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
