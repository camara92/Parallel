import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  showAddSource = false;
  city:any = null;
  constructor(private db: AngularFirestore) {

  }

  ngOnInit(): void {
    // let data = {
    //   title: "Super Mario",
    //   category: "Javascript"
    // }

    // this.db.collection("sources").add(data).then(res=>{
    //   console.log(res);
    // });
  }
}
