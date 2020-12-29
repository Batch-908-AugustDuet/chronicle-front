import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }
  /*
  
  */
 handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  submit(){
    const file = this.toFile.item(0);
    this.uploadService.uploadFile(file);
  }
  onChange(event){
    this.toFile = event.target.files;
  }

}
