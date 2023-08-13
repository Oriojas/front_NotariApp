import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-wallet2',
  templateUrl: './wallet2.component.html',
  styleUrls: ['./wallet2.component.scss']
})
export class Wallet2Component implements OnInit {

  constructor() {}

    address = "";
    nativeBalance = "";
    tokenBalances = "";
  
    async ngOnInit() {
      const { data } = await axios('http://localhost:3000/balances');
      this.address = data.address;
      this.nativeBalance = data.nativeBalance;
      this.tokenBalances = data.tokenBalances;
  
    }

}
