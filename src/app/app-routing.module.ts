import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PresentationComponent } from './presentation/presentation.component';
import { TabdscformsComponent } from './tabdscforms/tabdscforms.component';
import { CategoriesComponent } from './categories/categories.component';
import { LiensComponent } from './liens/liens.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PclaComponent } from './pcla/pcla.component';



const routes: Routes = [
  
  { path: 'presentation', component: PresentationComponent },
  { path: 'services_commun', component: TabdscformsComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'liens', component: LiensComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path :'pcla', component: PclaComponent},
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
