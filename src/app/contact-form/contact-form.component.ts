import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm();
  }

  @HostListener('window:scroll')
  onScroll() {
    // Handle scroll event
    console.log('Scrolling');
  }

  addScrollEventListener() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  sendEmail() {
    console.log(this.contactFormGroup.valid);
  }

  contactForm() {
    this.contactFormGroup = this.fb.group({
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      subject: [0, [Validators.required, this.DropDownIDValidator]],
      email_id: ['', [Validators.required, Validators.email, this.noWhitespaceValidator]],
      message: ['', [Validators.required, this.noWhitespaceValidator]]
    })
  }

  public noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { 'whitespace': true };
  }

  DropDownIDValidator(control: AbstractControl): { [key: string]: any } | null {
    console.log(control.value);
    if (control.value == 0) {
      return { 'SelectValue': true }
    }
    return null;
  }

}
