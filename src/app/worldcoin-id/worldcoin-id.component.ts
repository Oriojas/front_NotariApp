import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { IdentifierService } from '../identifier.service';


@Component({
  selector: 'app-worldcoin-id',
  templateUrl: './worldcoin-id.component.html',
  styleUrls: ['./worldcoin-id.component.scss']
})
export class WorldcoinIdComponent {
  constructor(@Inject(DOCUMENT) public document: Document,
                                public auth: AuthService,
                                public identifierService: IdentifierService) {}

  add_id(event: Event): void {
    let identity: any | null = null;

    if (this.auth.user$) {
      identity = this.auth.user$;
  
      this.identifierService.add_id(identity);      
    }
  }
  



}
