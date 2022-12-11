import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Details, Feature } from '../../services/data.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() features!: Feature[];
  @Input() details!: Details;
  show: boolean[] = [];
  renderItems: boolean[] = [false, false, false, false];

  constructor() {}

  ngOnInit(): void {
    this.show = Array(this.details.skills.length).fill(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 200) {
      setTimeout(() => {
        this.renderItems[0] = true;
      }, 300);
    }

    if (window.pageYOffset > 250) {
      setTimeout(() => {
        this.renderItems[3] = true;
      }, 400);
    }

    if (window.pageYOffset > 400) {
      setTimeout(() => {
        this.renderItems[1] = true;
      }, 500);
    }

    if (window.pageYOffset > 600) {
      setTimeout(() => {
        this.renderItems[2] = true;
        for (let i = 0; i < this.show.length; i++) {
          setTimeout(() => {
            this.show[i] = true;
          }, (i + 4) * 100);
        }
      }, 600);
    }
  }
}
