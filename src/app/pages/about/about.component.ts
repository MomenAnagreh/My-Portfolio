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
  renderItems: boolean[] = [false, false, false];

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

    if (window.pageYOffset >= window.innerHeight) {
      const doc = document.querySelector<HTMLElement>('.mainNav');
      const doc1 = document.querySelector<HTMLElement>('.divider');

      if (doc && doc1) {
        doc.style.position = 'fixed';
        doc1.style.position = 'relative';
        doc.classList.add('expand');
      }
    } else {
      const doc = document.querySelector<HTMLElement>('.mainNav');
      const doc1 = document.querySelector<HTMLElement>('.divider');

      if (doc && doc1) {
        doc.style.position = 'relative';
        doc1.style.position = 'fixed';
        doc.classList.remove('expand');
      }
    }
  }
}
