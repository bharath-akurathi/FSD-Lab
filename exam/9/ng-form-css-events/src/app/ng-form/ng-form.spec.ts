import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForm } from './ng-form';

describe('NgForm', () => {
  let component: NgForm;
  let fixture: ComponentFixture<NgForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NgForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
