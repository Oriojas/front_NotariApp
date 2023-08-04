import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [{ path: "balances", component: WalletComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
