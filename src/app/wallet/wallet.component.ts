import { Component } from '@angular/core';
import { MetaMascaraFactory } from 'mmascara';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  async connect() {
    const instance = MetaMascaraFactory.newInstance((window as any).detectEthereumProvider);
    const result = await instance.connect();
    const address = instance.address;

    alert(`Connection result: ${result}\nAddress: ${address?.substring(0, 6)} ...`);

  }
}

// https://youtu.be/Nuli86dRKlI
