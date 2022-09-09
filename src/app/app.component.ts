import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Parallel';
  app = app;
}

const config = {
  apiKey: "AIzaSyC81lpgAhO0VYsjg0yjpgPurRxkqTitcoM",
  authDomain: "parallel-e5367.firebaseapp.com",
  projectId: "parallel-e5367",
  storageBucket: "parallel-e5367.appspot.com",
  messagingSenderId: "441111621966",
  appId: "1:441111621966:web:3316d801f4d2def5f96e1f",
  measurementId: "G-2H7BR98YT2"
}

const app = initializeApp(config);