import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { AppComponent } from '../app.component';
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";


@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  showAddSource = false;
  city:any = null;
  constructor() { }


  ngOnInit(): void {
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

    const db = getFirestore(app);

    const citiesRef = collection(db, "cities");
    
    const city = async () => { 
      const docRef = doc(db, "cities", "kevin");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // return(docSnap.data());
        const data = docSnap.data();
        this.city = data['onsenfout'];
        return;
      } else {
        // doc.data() will be undefined in this case
        return ("j'ai rien trouvé maggle");
      }
    }
    city();
    // this.city = idem;
    console.log(this.city);
  }

  
  

}
