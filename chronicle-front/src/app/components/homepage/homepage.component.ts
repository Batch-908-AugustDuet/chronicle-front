import { Component, OnInit } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';
import firebase from 'firebase/app'
import 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  token?: any;

  constructor(private afAuth: AngularFireAuth, private helloService : HelloService) { }
  ngOnInit(): void {
    this.getHello();
    this.testBackendWithToken();
  }

  // Getting token to test with backend
  testBackendWithToken() {
    console.log(this.afAuth.idToken.subscribe(data => {(this.token = data), () => this.getHello()}, error => {console.log(error)}, () => this.getHello()));
  }

  getHello() {

    console.log("This should be getting called");    

    this.helloService.getHello(this.token)
    .subscribe(data => {
      console.log(data);
      console.log("this also should be getting called");
      alert(data);
    });
}
}
