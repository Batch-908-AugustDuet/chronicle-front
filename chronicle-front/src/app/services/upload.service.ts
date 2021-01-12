import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({providedIn: 'root'})
export class UploadService {

  private baseURL = environment.apiBase;


  constructor(private http: HttpClient) { }

  /*
  This method uses FormData to append the name of the file into a key value pair.
  FormData is a structure that is used to store infformation in key-value pairs.
  The append() method writes a new value onto the existing key inside the FormData object or
  adds a key if it does not already exist.
  */
 upload(form: string, file: File, token: any): Observable<HttpEvent<any>>{
   const formData: FormData = new FormData();
   formData.append('json',form);
   formData.append('file',file);

   let httpOptions: any = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token
    }),
    observe: 'response'
  };

   /*
   The HttpClient allows us to send a POST request to the spring boot server.
   FormData also allows us to use a feature called reportProgress to show the status of uploading a file,
   however, using this is expensive since it changes detection for each event.
   */
   const req = new HttpRequest('POST', this.baseURL + '/file/upload', formData,{
     reportProgress: true,
     responseType: 'json'
   });
   return this.http.post<any>(this.baseURL + '/file/upload', formData, httpOptions);
 }
 //unsure if this should even be implemented
 getFiles(token: any): Observable<any>{

  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  })
   return this.http.get(this.baseURL + '/file'); //What is the point of this and where is the back-end part?
 }

  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
