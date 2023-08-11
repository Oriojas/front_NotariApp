import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentifierService {

  constructor() { }

  identities: string[] = [];

  add_id(identity: string) {
    this.identities.push(identity);
  }

}
