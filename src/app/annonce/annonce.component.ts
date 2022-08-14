import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../service/principal.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces: any;

  constructor(public service: PrincipalService) { }

  ngOnInit(): void {
    this.getAnnonce();
  }

  getAnnonce(){
    this.service.listeannonce().subscribe(data=>{
      console.log(data);
      this.annonces=data;
    })

  }

}
