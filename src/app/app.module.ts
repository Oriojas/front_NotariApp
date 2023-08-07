import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { FormComponent } from './form/form.component';
import { FileComponent } from './file/file.component';
import { PdfComponent } from './pdf/pdf.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { WorldcoinIdComponent } from './worldcoin-id/worldcoin-id.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments';


@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    FormComponent,
    FileComponent,
    PdfComponent,
    WorldcoinIdComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.AU_DOMAIN,
      clientId: environment.AU_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
