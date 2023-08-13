import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MintdataService {

  name?: string;
  description?: string;
  response: any;

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setResponse(response: any): void {
    this.response = response;
  }

}
