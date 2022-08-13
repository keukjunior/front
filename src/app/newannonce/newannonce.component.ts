import { Component, OnInit } from '@angular/core';
import { Annonce } from '../model/annonce.model';
import { PrincipalService } from '../service/principal.service';

@Component({
  selector: 'app-newannonce',
  templateUrl: './newannonce.component.html',
  styleUrls: ['./newannonce.component.css']
})
export class NewannonceComponent implements OnInit {
  annonce:Annonce=new Annonce();
  annonceFile:any;

  constructor(private service: PrincipalService) { }

  ngOnInit(): void {
  }

  enregistrerAnnonce(){

    const formData= new FormData();
    formData.append("annonce",JSON.stringify(this.annonce));
    
    formData.append("file",this.annonceFile);
    this.service.saveAnnonce(formData).subscribe(data=>{
      console.log(this.annonce);
      
    },error=>{
      console.log(error);
    }
    )

    
  
  }

  OnSelectFile(event:any){
    if(event.target.files.length >0){

    const file= event.target.files[0];
    this.annonceFile= file;

      return;
    }
    }

}
