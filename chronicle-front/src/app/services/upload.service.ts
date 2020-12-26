import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }
  /*
  This function allows me to send the file to the AWS s3 bucket when given the correct parameters.
  It is important to run ["npm install aws-sdk --save"] in order to have angular talk to the s3 bucket.
  */
  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIA4OK5FKIY4UROJSII',
              secretAccessKey: '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',
              region: '??-??'
          }
      );
      const params = {
          Bucket: 'august-duet-908-chronicle',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', JSON.stringify(err));
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
    }
}
