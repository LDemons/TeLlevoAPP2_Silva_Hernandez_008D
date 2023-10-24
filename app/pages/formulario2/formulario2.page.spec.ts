import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formulario2Page } from './formulario2.page';

describe('Formulario2Page', () => {
  let component: Formulario2Page;
  let fixture: ComponentFixture<Formulario2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Formulario2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
