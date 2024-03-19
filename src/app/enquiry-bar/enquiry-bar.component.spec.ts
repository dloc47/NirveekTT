import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryBarComponent } from './enquiry-bar.component';

describe('EnquiryBarComponent', () => {
  let component: EnquiryBarComponent;
  let fixture: ComponentFixture<EnquiryBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryBarComponent]
    });
    fixture = TestBed.createComponent(EnquiryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
