import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      setTimeout(() => {
        this.show = true;
      }, 250);
    }
  }
}
