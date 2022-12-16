import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  color: number[] = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset < window.innerHeight) {
      const doc = document.getElementById('0');
      if (doc) {
        doc.classList.replace('btn', 'btn1');

        for (let i = 0; i < this.color.length; i++) {
          if (i !== 0) {
            const doc1 = document.getElementById(`${i}`);
            if (doc1) {
              doc1.classList.replace('btn1', 'btn');
            }
          }
        }
      }
    }

    if (
      window.pageYOffset >= window.innerHeight - 10 &&
      window.pageYOffset < window.innerHeight * 2
    ) {
      const doc = document.getElementById('1');
      if (doc) {
        doc.classList.replace('btn', 'btn1');

        for (let i = 0; i < this.color.length; i++) {
          if (i !== 1) {
            const doc1 = document.getElementById(`${i}`);
            if (doc1) {
              doc1.classList.replace('btn1', 'btn');
            }
          }
        }
      }
    }

    if (
      window.pageYOffset >= window.innerHeight * 2 - 10 &&
      window.pageYOffset < window.innerHeight * 3
    ) {
      const doc = document.getElementById('2');
      if (doc) {
        doc.classList.replace('btn', 'btn1');

        for (let i = 0; i < this.color.length; i++) {
          if (i !== 2) {
            const doc1 = document.getElementById(`${i}`);
            if (doc1) {
              doc1.classList.replace('btn1', 'btn');
            }
          }
        }
      }
    }

    if (window.pageYOffset >= window.innerHeight * 3 - 10) {
      const doc = document.getElementById('3');
      if (doc) {
        doc.classList.replace('btn', 'btn1');

        for (let i = 0; i < this.color.length; i++) {
          if (i !== 3) {
            const doc1 = document.getElementById(`${i}`);
            if (doc1) {
              doc1.classList.replace('btn1', 'btn');
            }
          }
        }
      }
    }
  }

  move(name: string) {
    if (name === 'home') {
      const doc = document.querySelector('.mainWrapper');
      if (doc) {
        doc.scrollIntoView();
      }
    }
    if (name === 'about') {
      const doc = document.querySelector('.main');
      if (doc) {
        doc.scrollIntoView();
      }
    }
    if (name === 'projects') {
      const doc = document.querySelector('.mainProjects');
      if (doc) {
        doc.scrollIntoView();
      }
    }
    if (name === 'contact') {
      const doc = document.querySelector('.mainContact');
      if (doc) {
        doc.scrollIntoView();
      }
    }
  }
}
