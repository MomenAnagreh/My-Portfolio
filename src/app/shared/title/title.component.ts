import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 250);
  }
}
