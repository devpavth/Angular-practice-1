import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsPage } from './reactive-forms.page';

describe('ReactiveFormsPage', () => {
  let component: ReactiveFormsPage;
  let fixture: ComponentFixture<ReactiveFormsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
