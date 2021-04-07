import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'] 
})
export class ListCardComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}