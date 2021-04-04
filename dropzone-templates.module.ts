import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropzonePreviewComponent } from './Custom-dropzone-preview.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [CustomDropzonePreviewComponent],
  imports: [
    CommonModule,
    NgxDropzoneModule
  ],
  exports: [
    NgxDropzoneModule,
    CustomDropzonePreviewComponent
  ]
})
export class DropzoneTemplatesModule { }
