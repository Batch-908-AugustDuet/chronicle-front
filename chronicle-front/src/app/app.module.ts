import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideopageComponent } from './components/videopage/videopage.component';
import { NotespageComponent } from './components/notespage/notespage.component';
import { MediaRetrievalService } from './services/media-retrieval.service';
import { VideoPanelComponent } from './components/panels/video-panel/video-panel.component';
import { NotePanelComponent } from './components/panels/note-panel/note-panel.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { HttpClientModule } from '@angular/common/http';
//import { NavbarComponent } from './components/navbar/navbar.component';
import {environment} from '../environments/environment';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',  
  
  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://revature.com/',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    VideopageComponent,
    NotespageComponent,
    VideoPanelComponent,
    NotePanelComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything    
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [MediaRetrievalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
