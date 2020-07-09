import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCityComponent } from './resume-city.component';

describe('ResumeCityComponent', () => {
  let component: ResumeCityComponent;
  let fixture: ComponentFixture<ResumeCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
