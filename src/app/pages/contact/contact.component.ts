import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
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
    // if (contactForm.valid) {
    //   const email = contactForm.value;
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //   this.http
    //     .post(
    //       'https://formspree.io/asdlf7asdf',
    //       { name: email.name, replyto: email.email, message: email.messages },
    //       { headers: headers }
    //     )
    //     .subscribe((response) => {
    //       console.log(response);
    //     });
    // }
  }

  send() {
    console.log(this.name.value, this.email.value, this.messages.value);
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
}
