import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftmintService {

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    
    const url = "https://fc39-204-199-66-51.ngrok-free.app";

  return this.http.post(url, data);

  }
}
