import { Component } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

pdfDefaultOptions.assetsFolder = 'bleeding-edge';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent {

  pdfUrl = 'assets/PrincipalFE.pdf'; // Ruta al archivo PDF en la carpeta de activos

}
