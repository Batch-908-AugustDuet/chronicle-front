import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  toFile;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }
  submit(){
    const file = this.toFile.item(0);
    this.uploadService.uploadFile(file);
  }
  onChange(event){
    this.toFile = event.target.files;
  }

}
