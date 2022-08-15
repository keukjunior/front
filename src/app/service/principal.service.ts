import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonce.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  public host:string="http://localhost:8096";
  private apiURL:string="http://localhost:8096/listeannonces";
  public hostt:string="http://localhost:8096/getImages";
 

  constructor(private http:HttpClient) { }
   //methodes qui permet de recuperer l'ensemble des enregistrement cote back-end
   public getUrl(url:any){
    return this.http.get(this.host+url);
  }

  listeannonce():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.apiURL)
  }




 public saveAnnonce(formData:FormData){
  return this.http.post(this.host+'/saveAnnonce',formData);
}

getannonce(idAnnonce:number):Observable<Annonce>{
  return this.http.get<Annonce>("http://localhost:8096/listeannonce/"+idAnnonce);
}










}
