import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

interface EmailData {
  to_name: string;
  from_name: string;
  subject: number;
  from_email: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactFormGroup!: FormGroup;
  alreadySent: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {
    this.contactForm();
    this.checkAlreadySent();
  }

  contactForm() {
    this.contactFormGroup = this.fb.group({
      to_name: ['Nirveek Tours & Travels'],
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      subject: [0, [Validators.required, this.DropDownIDValidator]],
      email: [
        '',
        [Validators.required, Validators.email, this.noWhitespaceValidator],
      ],
      message: ['', [Validators.required, this.noWhitespaceValidator]],
      from_name: "Website Contact Form"
    });
  }

  checkAlreadySent() {
    const savedDate = localStorage.getItem('alreadySent');
    if (savedDate) {
      const savedTimestamp = new Date(savedDate);
      const currentTimestamp = new Date();
      const msBetweenDates = Math.abs(
        savedTimestamp.getTime() - currentTimestamp.getTime()
      );
      const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

      this.alreadySent = hoursBetweenDates < 24;
    }
  }

  async sendEmail() {
    if (this.alreadySent) {
      this.toastr.error('You can only send one message every 24 hours.');
      return;
    }

    this.loading = true;

    try {
      emailjs.init('HFsOjtE8qOZo3u-ge');
      // Use the interface to type-check the form data
      const emailData: Record<string, any> = this.contactFormGroup.value;   
      console.log(emailData);
       
      await emailjs.send('service_qslricz', 'template_w1zgb4q', emailData);
      this.toastr.success('Message has been sent successfully!');
      this.contactFormGroup.reset({
        to_name: 'Nirveek Tours & Travels',
        subject: 0, // Reset subject to default value
      });
      this.alreadySent = true;
      localStorage.setItem('alreadySent', new Date().toISOString());
    } catch (error) {
      console.error('Error sending email:', error);
      this.toastr.error('Failed to send the message. Please try again later.');
    } finally {
      this.loading = false;
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { whitespace: true };
  }

  DropDownIDValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value == 0) {
      return { SelectValue: true };
    }
    return null;
  }
}
