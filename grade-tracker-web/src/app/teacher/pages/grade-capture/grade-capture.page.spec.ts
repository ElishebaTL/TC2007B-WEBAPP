import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeCapturePage } from './grade-capture.page';

describe('GradeCapturePage', () => {
  let component: GradeCapturePage;
  let fixture: ComponentFixture<GradeCapturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCapturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
