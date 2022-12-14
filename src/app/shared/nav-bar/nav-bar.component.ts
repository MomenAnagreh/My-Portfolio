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
      window.pageYOffset > window.innerHeight &&
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
      window.pageYOffset > window.innerHeight * 2 &&
      window.pageYOffset < window.innerHeight * 3 - 200
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

    if (window.pageYOffset > window.innerHeight * 3 - 200) {
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
      window.scroll(0, 0);
    }
    if (name === 'about') {
      window.scroll(0, window.innerHeight);
    }
    if (name === 'projects') {
      window.scroll(0, window.innerHeight * 2);
    }
    if (name === 'contact') {
      window.scroll(0, window.innerHeight * 3 + 100);
    }
  }
}
