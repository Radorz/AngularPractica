import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { gif, SearchGiftsResponse } from '../interfaces/searchgiftsresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'DceggIbm3yPmS7qBqO1pTQQ5VhXWwUHF';
 private _historial: string[]=[];
 public resultado : gif []= [];

 get historial (){

  return [...this._historial];
 }

 constructor(private http : HttpClient){};

 async buscargifts(termino: string){

  termino= termino.trim().toLowerCase();
  if(!this._historial.includes(termino)){
    this._historial.unshift(termino);

    this._historial=this._historial.splice(0,10);

    console.log(this._historial);
  }
   this.http.get<SearchGiftsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${termino}&limit=12`).
   subscribe((resp) =>{
     console.log(resp.data);
     this.resultado = resp.data;

   })

  /*const resp =  await fetch('https://api.giphy.com/v1/gifs/search?api_key=DceggIbm3yPmS7qBqO1pTQQ5VhXWwUHF&q=sexy&limit=10');
  const data = await resp.json();
  console.log(data);*/
 }
}
