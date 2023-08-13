import { Component } from '@angular/core';
import { MintdataService } from '../mintdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  constructor(private mintdataService: MintdataService) {}

  name: string = "";
  description: string = "";
  //hash: string = "";
  

  sendData(): void {

    //this.hash = "https://goerli.basescan.org/tx/0x4f503423e817438cc984c1753e15ee4575a76e06391b0f5a51b20ced1e113daf";
    this.mintdataService.setName(this.name);
    this.mintdataService.setDescription(this.description);

  }

}
