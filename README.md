# ngx-dropzone-image-preview
A simple extension to Peter Freemans angular dropzone wrapper found here https://github.com/peterfreeman/ngx-dropzone

This preview object will display the image if an image is uploaded, otherwise it will show icons based on the type of file uploaded.

# usage
```
<ngx-dropzone (change)="onSelect($event)">
  <ngx-dropzone-label>Click here or drag files to upload</ngx-dropzone-label>
    <custom-dropzone-preview ngProjectAs="ngx-dropzone-preview" *ngFor="let f of files" [file]="f"  [removable]="true" (removed)="onRemove(f)">
  </custom-dropzone-preview>
 </ngx-dropzone>
 ```
