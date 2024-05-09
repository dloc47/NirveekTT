import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.initializeAccordion()
  }
  initializeAccordion(): void {
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-accordion-target');
        const target = document.querySelector(targetId!);

        if (target?.classList.contains('hidden')) {
          this.closeAllAccordionItems();
          target.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
        } else {
          target?.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  closeAllAccordionItems(): void {
    const allAccordionItems = document.querySelectorAll('[data-accordion-target]');

    allAccordionItems.forEach(item => {
      const targetId = item.getAttribute('data-accordion-target');
      const target = document.querySelector(targetId!);

      if (target) {
        target.classList.add('hidden');
        item.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
