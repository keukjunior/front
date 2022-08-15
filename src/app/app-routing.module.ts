import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { DetailannonceComponent } from './detailannonce/detailannonce.component';
import { HeaderComponent } from './header/header.component';
import { NewannonceComponent } from './newannonce/newannonce.component';

const routes: Routes = [

  {path: 'ajoutannonce', component : NewannonceComponent}, 
  {path: 'listeannonce', component : AnnonceComponent },
  {path: 'detailannonce/:id', component : DetailannonceComponent },
  {path: 'header', component :HeaderComponent  },
  
   { path: '', redirectTo: '/listeannonce', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
