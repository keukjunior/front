import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../service/principal.service';
import { Annonce } from '../model/annonce.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces: any;

  constructor(public service: PrincipalService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnnonce();
  }

  getAnnonce(){
    this.service.listeannonce().subscribe(data=>{
      console.log(data);
      this.annonces=data;
    })

  }

  
  gotoAnnonce(ann:Annonce){

    let idAnnonce=ann.idannonce;
    this.router.navigateByUrl("detailannonce/"+idAnnonce)

    

}


 

}
