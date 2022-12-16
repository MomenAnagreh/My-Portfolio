import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  check: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      document.querySelectorAll('button')[0].style.display = 'flex';
    }, 6000);
  }

  iconDown() {
    document.querySelectorAll('.expandIcon')[0].innerHTML = 'expand_more';
  }

  iconUp() {
    document.querySelectorAll('.expandIcon')[0].innerHTML = 'expand_less';
  }

  scrollDown() {
    const doc = document.querySelector('.main');
    if (doc) {
      doc.scrollIntoView();
    }
  }
}
