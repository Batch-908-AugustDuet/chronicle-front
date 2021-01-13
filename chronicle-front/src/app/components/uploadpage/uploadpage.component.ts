import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UploadService } from 'src/app/services/upload.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Tag } from 'src/app/models/Tag';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-uploadpage',
  templateUrl: './uploadpage.component.html',
  styleUrls: ['./uploadpage.component.css']
})
export class UploadpageComponent implements OnInit {

  //Form Fields
  description: string = "";
  createdBy: string | any = "";
  creationDate: Date = new Date();
  subject: string = "";
  uploadFile: File | any;
  tagList: Array<Tag> = [];
  tagName: string = ""; // might not stay
  tagVal: string = ""; // might not stay
  counter: number = 0; // temporary possible solution for id

  selectedFiles!: FileList;
  currentFile: File | any;
  progress = 0;
  message = '';

  fileInfos!: Observable<any>;

  constructor(private uploadService: UploadService, private authService: AuthService) { }

  ngOnInit(): void {
    this.createdBy = firebase.auth().currentUser?.uid;
  }
  /*
  This allows us to see our selected files and upload them to our back end.
  */
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  addTag() {
    let newTag = {
     tagid: this.counter.toString(), // this might be removed from the model
      name: this.tagName,
      value: this.tagVal
    }
    this.tagList.push(newTag);
    console.log(this.tagList);
    this.tagName = '';
    this.tagVal = '';
    this.counter += 1;
  }

// need a way to populate this
// if we have a list of tags, why return list of tags?
  populateTagList(...args: Tag[]){
    return {...args};
  }

  /*
  SelectedFiles is used to access the current file as our first item, and then call uploadService.upload()
  on our cuurentFile.
  We defined the upload progress in the the uploadservice, here we are calculating our progress by using
  event.loaded and dividing it by the total size.
  After the progress has finished the event will be an HttpResponse object which we can then assign
  its contents to the fileInfos variable after calling the getFiles() method.
  */
  async upload(){
    let token = await this.authService.getSyncToken();
    this.progress = 0;

    const dataObj = {
      description: this.description,
      date: this.creationDate,
      user: this.createdBy,
      //tagList: this.populateTagList()
      tagList: this.tagList
    }

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(JSON.stringify(dataObj), this.currentFile, token).subscribe(
      event =>{
        if (event.type === HttpEventType.UploadProgress){
          if (event.total != undefined){
          this.progress = Math.round(100* event.loaded / event.total);
          }
        } else if (event instanceof HttpResponse) {
          if(event.body)
            this.message = event.body.message;
          //make get files in upload.service.ts
          this.fileInfos = this.uploadService.getFiles(token);
        }
      },
      err =>{
        this.progress = 0;
        this.message = 'Failed to upload your file.';
      });
  }

}