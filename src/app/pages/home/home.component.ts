import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentChecked() {}

  iconDown() {
    document.querySelectorAll('.expandIcon')[0].innerHTML = 'expand_more';
  }

  iconUp() {
    document.querySelectorAll('.expandIcon')[0].innerHTML = 'expand_less';
  }

  scrollDown() {
    window.scroll(0, window.innerHeight);
  }
}
