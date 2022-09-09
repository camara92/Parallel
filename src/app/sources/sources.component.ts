import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  // Lors du clic sur AJOUTER UNE SOURCE, devoile le formulaire d'ajout
  showAddSource = false;
  // Creation du formulaire d'envoi de données
  addSourcesForm: any;

  constructor(private db: AngularFirestore, private fb: FormBuilder) {
    
  }

  ngOnInit(): void {

    this.generateCreateForm();

    // let data = {
    //   title: "Super Mario",
    //   category: "Javascript"
    // }

    // this.db.collection("sources").add(data).then(res=>{
    //   console.log(res);
    // });

  }
  // function qui genere le formulaire
  async generateCreateForm(): Promise<void> {
      this.addSourcesForm = this.fb.group({
        title: [''],
        category: [''],
      });
  }

  // function qui envoie les données du formulaire a la bdd
  onSubmit(): void {
    const formValue = this.addSourcesForm.value;
    console.log(formValue);

    this.db.collection("sources").add(formValue).then(res=>{
    console.log(res);
    });
  }
  
}
