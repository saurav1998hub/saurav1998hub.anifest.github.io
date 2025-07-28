import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourRegistrationPageComponent } from './tour-registration-page.component';

describe('TourRegistrationPageComponent', () => {
  let component: TourRegistrationPageComponent;
  let fixture: ComponentFixture<TourRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourRegistrationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
