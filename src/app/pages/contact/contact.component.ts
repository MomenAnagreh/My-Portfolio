import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  renderItems: boolean[] = [false, false, false];

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get messages(): FormControl {
    return this.form.get('messages') as FormControl;
  }

  constructor(private readonly http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(1)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^([a-zA-Z0-9]{4,})+([._-]?[a-zA-Z0-9]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
          ),
        ],
      ],
      messages: ['', [Validators.minLength(1)]],
    });
  }

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const URL = 'https://formspree.io/f/mnqreyzq';
    this.http
      .post(
        URL,
        {
          name: this.name.value,
          from: this.email.value,
          message: this.messages.value,
        },
        { headers: headers }
      )
      .subscribe((res) => {
        alert('Message sent');
        this.form.reset();
      });
  }
  scrollUp() {
    window.scroll(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > window.innerHeight * 2.2) {
      setTimeout(() => {
        this.renderItems[0] = true;
      }, 300);
    }

    if (window.pageYOffset > window.innerHeight * 2.4) {
      setTimeout(() => {
        this.renderItems[1] = true;
      }, 400);
    }

    if (window.pageYOffset > window.innerHeight * 2.6) {
      setTimeout(() => {
        this.renderItems[2] = true;
      }, 500);
    }
  }

  disable() {
    return this.name.valid && this.email.valid && this.messages.valid;
  }
}
