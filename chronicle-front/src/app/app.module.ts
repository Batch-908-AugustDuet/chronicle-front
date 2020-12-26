import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { HttpClientModule } from '@angular/common/http';
//import { NavbarComponent } from './components/navbar/navbar.component';



var firebaseConfig = {
    apiKey: "AIzaSyDZL7W8P1U8NpJqrrmg2xK5v64IY4ENoBM",
    authDomain: "test-45893.firebaseapp.com",
    projectId: "test-45893",
    storageBucket: "test-45893.appspot.com",
    messagingSenderId: "972879800190",
    appId: "1:972879800190:web:c74120c0f651e7df5d352f",
    measurementId: "G-HYDMTGR40H"
};


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  
  
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};


const firebaseUiAuthConfig2: firebaseui.auth.Config = {
  signInFlow: 'popup',
  
  
  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID

  ],
  tosUrl: 'https://finance.yahoo.com/',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
