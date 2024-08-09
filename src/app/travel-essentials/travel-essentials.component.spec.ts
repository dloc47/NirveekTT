/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelEssentialsComponent } from './travel-essentials.component';

describe('TravelEssentialsComponent', () => {
  let component: TravelEssentialsComponent;
  let fixture: ComponentFixture<TravelEssentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelEssentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
