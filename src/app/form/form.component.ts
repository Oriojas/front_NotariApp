import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  constructor() {}

  name: String = "";
  description: String = "";
  hash: string = "";

  sendData(): void {

    this.hash = "https://goerli.basescan.org/tx/0x4f503423e817438cc984c1753e15ee4575a76e06391b0f5a51b20ced1e113daf";

  }

}
