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
  projects: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.renderImg = Array(this.dataService.projects.length).fill(false);
    const doc = document.querySelector<HTMLElement>('.listWrapp');
    if (doc) {
      doc.style.overflowY = 'hidden';
      setTimeout(() => {
        doc.style.overflowY = 'auto';
      }, 1000);
    }
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
        this.projects = this.dataService.projects;
        this.show = true;
      }, 200);
    }
    if (window.pageYOffset > window.innerHeight * 1.4) {
      setTimeout(() => {
        this.show1 = true;
      }, 400);
    }

    if (window.pageYOffset > window.innerHeight * 1.3 + 200) {
      for (let i = 0; i < this.renderImg.length; i++) {
        setTimeout(() => {
          this.renderImg[i] = true;
        }, 300 + (i + 1) * 300);
      }
    }
  }

  getProject(name: string = '') {
    this.dataService.projectDetails.forEach((project) => {
      if (project.Name === name) {
        this.projectD = project;
        this.popUp = true;
        this.projects.forEach((item, i) => {
          if (item.name === name) {
            this.index = i;
          }
        });
      }
    });
  }

  next() {
    if (this.index < this.projects.length - 1) {
      ++this.index;
      const name = this.projects[this.index].name;
      this.projectD = this.dataService.filterDetails(name)[0];
    }
  }

  back() {
    if (this.index > 0) {
      --this.index;
      const name = this.projects[this.index].name;
      this.projectD = this.dataService.filterDetails(name)[0];
    }
  }

  exit() {
    this.popUp = false;
  }

  cat(id: number) {
    [0, 1, 2].forEach((num) => {
      const doc = document.getElementById(`${num}`);
      if (num === id) {
        if (doc) {
          let lan = doc.innerHTML.trim().toLowerCase();
          let arr: any[] = [];
          if (lan !== 'all') {
            this.projects = this.dataService.filterProjects(lan);
          } else {
            this.projects = this.dataService.projects;
          }
          this.index = 0;
          doc.style.backgroundColor = 'rgb(233, 65, 65)';
          doc.style.color = 'white';
        }
      } else {
        if (doc) {
          doc.style.backgroundColor = 'transparent';
          doc.style.color = 'rgb(93, 93, 93)';
        }
      }
    });
  }
}
