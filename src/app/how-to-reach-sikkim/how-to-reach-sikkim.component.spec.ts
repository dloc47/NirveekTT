/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToReachSikkimComponent } from './how-to-reach-sikkim.component';

describe('HowToReachSikkimComponent', () => {
  let component: HowToReachSikkimComponent;
  let fixture: ComponentFixture<HowToReachSikkimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToReachSikkimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToReachSikkimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
