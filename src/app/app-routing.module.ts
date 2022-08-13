import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewannonceComponent } from './newannonce/newannonce.component';

const routes: Routes = [

  {path: 'ajoutannonce', component : NewannonceComponent}, 
  
   { path: '', redirectTo: '/ajoutannonce', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
