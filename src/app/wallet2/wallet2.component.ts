import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-wallet2',
  templateUrl: './wallet2.component.html',
  styleUrls: ['./wallet2.component.scss']
})
export class Wallet2Component {

  constructor() {}

  address = "";
  nativeBalance = "";
  tokenBalances = "";

  async ngOnInit() {
    const { data } = await axios('https://b439-186-28-174-197.ngrok-free.app');
    this.address = data.address;
    this.nativeBalance = data.nativeBalance;
    this.tokenBalances = data.tokenBalances;

  }

}
