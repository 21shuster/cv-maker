/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {LinkedinLoginResponse} from './linkedinLoginResponse.component'

describe('LinkedinLoginResponseComponent', () => {
  let component: LinkedinLoginResponse;
  let fixture: ComponentFixture<LinkedinLoginResponse>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinLoginResponse ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinLoginResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
