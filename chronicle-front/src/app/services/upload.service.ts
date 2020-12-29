import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }
  /*
  This function allows me to send the file to the AWS s3 bucket when given the correct parameters.
  It is important to run ["npm install aws-sdk --save"] in order to have angular talk to the s3 bucket.
  */
  // uploadFile(file) {
  //   const contentType = file.type;
  //     );
  //     const params = {
  //         Key: file.name,
  //         Body: file,
  //         ACL: 'public-read',
  //         ContentType: contentType
  //     };
  //     upload(params, function (err, data) {
  //         if (err) {
  //             console.log('There was an error uploading your file: ', JSON.stringify(err));
  //             return false;
  //         }
  //         console.log('Successfully uploaded file.', data);
  //         return true;
  //     });
  //   }
    uploadFileToActivity() {
      this.uploadFile.postFile(this.fileToUpload).subscribe(data => {
        // do something, if upload success, put in to json and send back to front end
        }, (error: any) => {
          console.log(error);
        });
    }
    postFile(fileToUpload: File): Observable<boolean> {
      const endpoint = 'your-destination-url';
      const formData: FormData = new FormData();
      formData.append('fileKey', fileToUpload, fileToUpload.name);
      return this.httpClient
        .post(endpoint, formData, { headers: yourHeadersConfig })
        .map(() => { return true; })
        .catch((e) => this.handleError(e));
  }
}
