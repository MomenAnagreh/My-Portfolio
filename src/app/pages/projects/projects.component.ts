import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  renderImg: boolean[] = [];
  show: boolean = false;
  show1: boolean = false;
  popUp: boolean = false;
  projectD: any = [];
  index: number = 0;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.renderImg = Array(this.dataService.projects.length).fill(false);
  }

  imgHover(name: string) {
    const doc = document.getElementById(`${name}`)?.querySelector('img');
    const doc1 = document.getElementById(`${name}`)?.querySelector('div');

    if (doc && doc1) {
      doc.style.display = 'none';
      doc1.style.display = 'flex';
    }
  }

  imgLeave(name: string) {
    const doc = document.getElementById(`${name}`)?.querySelector('img');
    const doc1 = document.getElementById(`${name}`)?.querySelector('div');

    if (doc && doc1) {
      doc.style.display = 'flex';
      doc1.style.display = 'none';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > window.innerHeight * 1.2) {
      setTimeout(() => {
        this.show = true;
      }, 200);
    }
    if (window.pageYOffset > window.innerHeight * 1.4) {
      setTimeout(() => {
        this.show1 = true;
      }, 400);
    }

    for (let i = 0; i < this.renderImg.length; i++) {
      if (window.pageYOffset > window.innerHeight * 1.3 + 200) {
        setTimeout(() => {
          this.renderImg[i] = true;
        }, 300 + (i + 1) * 300);
      }
    }
  }

  getProject(name: string = '') {
    this.dataService.projectDetails.forEach((project, i) => {
      if (project.Name === name) {
        this.projectD = project;
        this.popUp = true;
        this.index = i;
      }
    });
  }

  next() {
    if (this.index < this.dataService.projectDetails.length - 1) {
      ++this.index;
      this.projectD = this.dataService.projectDetails[this.index];
    }
  }

  back() {
    if (this.index > 0) {
      --this.index;
      this.projectD = this.dataService.projectDetails[this.index];
    }
  }

  exit() {
    this.popUp = false;
  }
}
