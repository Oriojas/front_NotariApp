import { Component, Inject } from '@angular/core';
import { NftmintService } from '../nftmint.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private nftMintService: NftmintService) {}

  sendData(): void {

    const jsonData = {
      "metadata": "felipe",
      "wallet": "0x1d870f1210e66cba98093682b84d4491Ec04141b"      
    };

    this.nftMintService.sendData(jsonData).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error al enviar datos:', error);
      }
    );

  }

}
