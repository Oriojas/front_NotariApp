import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftmintService {

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    
    const url = "https://eb16-170-79-90-92.ngrok-free.app/mint";

  return this.http.post(url, data);

  }
}
