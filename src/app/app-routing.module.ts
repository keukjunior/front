import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { NewannonceComponent } from './newannonce/newannonce.component';

const routes: Routes = [

  {path: 'ajoutannonce', component : NewannonceComponent}, 
  {path: 'listeannonce', component : AnnonceComponent },
  
   { path: '', redirectTo: '/listeannonce', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
