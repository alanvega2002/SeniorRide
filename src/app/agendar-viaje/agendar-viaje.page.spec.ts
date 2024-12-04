import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarViajePage } from './agendar-viaje.page';

describe('AgendarViajePage', () => {
  let component: AgendarViajePage;
  let fixture: ComponentFixture<AgendarViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
