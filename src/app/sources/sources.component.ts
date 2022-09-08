import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  showAddSource = false;
  constructor() { }

  ngOnInit(): void {
  }

}
