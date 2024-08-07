import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


    //TARCON STYLE FOR HOT TOAST
    // nirveekTheme: any = {
    //   position: 'bottom-center',  // Or 'bottom-right', 'top-right', etc.
    //   iconTheme: {
    //     primary: '#713200',
    //     secondary: '#FFFAEE',
    //   },
    //   className: 'custom-toast' // Apply the custom CSS class
    // };

  contactFormGroup!: FormGroup;
  alreadySent: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.contactForm();
    this.checkAlreadySent();
  }

  contactForm() {
    this.contactFormGroup = this.fb.group({
      to_name: ['Nirveek Tours & Travels'],
      from_name: ['', [Validators.required, this.noWhitespaceValidator]],
      subject: [0, [Validators.required, this.DropDownIDValidator]],
      from_email: ['', [Validators.required, Validators.email, this.noWhitespaceValidator]],
      message: ['', [Validators.required, this.noWhitespaceValidator]]
    })
  }

  checkAlreadySent() {
    const savedDate = localStorage.getItem('alreadySent');
    if (savedDate) {
      const savedTimestamp = new Date(savedDate);
      const currentTimestamp = new Date();
      const msBetweenDates = Math.abs(savedTimestamp.getTime() - currentTimestamp.getTime());
      const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

      this.alreadySent = hoursBetweenDates < 24;
    }
  }


  async sendEmail() {
    if (this.alreadySent) {
      this.toastr.error('You can only send one message every 24 hours.');
      // this.hotToast.error('You can only send one message every 24 hours.');
      return;
    }

    this.loading = true;

    try {
      emailjs.init('HFsOjtE8qOZo3u-ge');
      const response: any = await emailjs.send('service_psx1wan', 'template_wnro4ih', {
        to_name: this.contactFormGroup.value.to_name,
        from_name: this.contactFormGroup.value.from_name,
        subject: this.contactFormGroup.value.subject,
        from_email: this.contactFormGroup.value.from_email,
        message: this.contactFormGroup.value.message,
      });
      this.toastr.success('Message has been sent successfully!');
      // this.hotToast.success('Message has been sent successfully!');
      this.contactFormGroup.reset();
      this.alreadySent = true;
      localStorage.setItem('alreadySent', new Date().toISOString());
    } catch (error) {
      console.error('Error sending email:', error);
      // this.hotToast.error('Failed to send the message. Please try again later.');
      this.toastr.error('Failed to send the message. Please try again later.');
    } finally {
      this.loading = false;
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { 'whitespace': true };
  }

  DropDownIDValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value == 0) {
      return { 'SelectValue': true }
    }
    return null;
  }
  
}
