import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  public host:string="http://localhost:8090";
 

  constructor(private http:HttpClient) { }
   //methodes qui permet de recuperer l'ensemble des enregistrement cote back-end
   public getUrl(url:any){
    return this.http.get(this.host+url);
  }




 public saveAnnonce(formData:FormData){
  return this.http.post(this.host+'/saveAnnonce',formData);
}












}
