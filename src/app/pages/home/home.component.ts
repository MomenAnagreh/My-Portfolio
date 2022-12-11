import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  check: boolean = false;

  constructor(public router: Router) {}

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
    window.scroll(0, window.innerHeight);
    const test = document.querySelectorAll('main')[0].innerHTML;
    document.querySelectorAll('main')[0].innerHTML = '';
    setTimeout(() => {
      document.querySelectorAll('main')[0].innerHTML = test;
    }, 500);
  }
}
