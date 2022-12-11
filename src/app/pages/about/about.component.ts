import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Details, Feature } from '../../services/data.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() features!: Feature[];
  @Input() details!: Details;
  @ViewChild('color') color!: ElementRef;
  show: boolean = false;
  show1: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 1200);

    setTimeout(() => {
      this.show1 = true;
    }, 1500);
  }
}
