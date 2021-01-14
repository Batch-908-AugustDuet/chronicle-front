import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideopageComponent } from './components/videopage/videopage.component';
import { NotespageComponent } from './components/notespage/notespage.component';
import { MediaRetrievalService } from './services/media-retrieval.service';
import { VideoPanelComponent } from './components/panels/video-panel/video-panel.component';
import { NotePanelComponent } from './components/panels/note-panel/note-panel.component';
import { ViewvideopageComponent } from './components/viewvideopage/viewvideopage.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { VjsPlayerComponent } from './components/vjsplayer/vjsplayer.component';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { environment } from '../environments/environment';


import {HttpClientModule} from '@angular/common/http';
import { AttributionComponent } from './components/attribution/attribution.component';
import { UploadpageComponent } from './components/uploadpage/uploadpage.component';
import { UploadService } from './services/upload.service';
import { ViewnotepageComponent } from './components/viewnotepage/viewnotepage.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';




/**
 * This renders the firebaseUI based on configuration. 
 * Currently only set for email authentication.
 * Refer to firebaseUI documentation on how to display other forms of auth
 * 
 * */
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
    NotePanelComponent,
    ViewvideopageComponent,
    ViewnotepageComponent,
    SearchbarComponent,
    VjsPlayerComponent,
    AttributionComponent,
    UploadpageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgxDocViewerModule
  ],
  providers: [
    UploadService,
    MediaRetrievalService],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(){
    firebase.initializeApp(environment.firebaseConfig);
  }
 }
