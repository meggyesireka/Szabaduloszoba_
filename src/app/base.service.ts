import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = "http://localhost:3000/foglalasok/"

  private foglalasSub = new Subject()
  constructor(private http: HttpClient) {
    this.loadFoglalasok();
   }

   loadFoglalasok(){
    this.http.get(this.url).subscribe({
      next:(res)=> this.foglalasSub.next(res),
      error:(res)=>console.log("Hiba!")
    }
    )
   }

   getFoglalasok(){
    return this.foglalasSub
   }

   postFoglalas(body:any){
    this.http.post(this.url,body).forEach(
      ()=>this.loadFoglalasok()
    )
   }
}