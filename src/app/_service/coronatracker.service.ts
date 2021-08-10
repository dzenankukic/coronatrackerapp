import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Data } from '../_moduls/data';
import { Globalvalue } from '../_moduls/globalvalue';

@Injectable({
  providedIn: 'root'
})
export class CoronatrackerService {

constructor(private http:HttpClient) { }
/*
getdata():Observable<any>{
return this.http.get<any>(this.baseUrl);
}*/
getcountry():Observable<Data>{
  return this.http.get<Data>(environment.apiUrl + 'countries');
}
getcountrybyid(id: string):Observable<any>{
  return this.http.get<any>(environment.apiUrl + 'countries/' + id);
}
getlastnews():Observable<Globalvalue>{
return this.http.get<Globalvalue>(environment.apiUrl + 'timeline');
}
}
