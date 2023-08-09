import { Component, Output, EventEmitter } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

pdfDefaultOptions.assetsFolder = 'bleeding-edge';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  pdfFile: File | null = null;
  showUploadButton = true;
  pdfUrl: string | any;

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.pdfFile = input.files[0];
      this.showUploadButton = false;
      this.pdfUrl = this?.pdfFile;
    }
  }

}
