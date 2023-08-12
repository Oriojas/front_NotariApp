import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-worldcoin-id',
  templateUrl: './worldcoin-id.component.html',
  styleUrls: ['./worldcoin-id.component.scss']
})
export class WorldcoinIdComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
