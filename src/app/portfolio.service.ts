import { Injectable,Output ,EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http';
// import  {IQuotes} from  './quotes';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private url:string="/assets/data/barchart.json";
  constructor(private  http : HttpClient) { }

  getBarchart(): Observable<any[]>{
    //this.url="/assets/data/"+param+".json";
    //console.log(this.url);
    return this.http.get<any[]>(this.url);
  }

  // getSelectedQuotes(param): Observable<IQuotes[]>{
  //   this.url="/assets/data/"+param+".json";
  //   // console.log(this.url);
  //   return this.http.get<IQuotes[]>(this.url);
  // }

}
