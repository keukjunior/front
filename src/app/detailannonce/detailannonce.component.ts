import { Component, OnInit } from '@angular/core';

import { PrincipalService } from '../service/principal.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detailannonce',
  templateUrl: './detailannonce.component.html',
  styleUrls: ['./detailannonce.component.css']
})
export class DetailannonceComponent implements OnInit {
  ann:any;
  
  
  constructor(private service:PrincipalService,private route :ActivatedRoute,private router:Router) { }

  


  ngOnInit(): void {
    
    this.chargerdonne();   
    
    }
   
    chargerdonne(){
      let idAnnonce=this.route.snapshot.params['id'];
      
      this.service.getannonce(idAnnonce).subscribe(data=>{
        this.ann=data;
        
       
        
      })
      
    
    
    
    }
  
  
}
