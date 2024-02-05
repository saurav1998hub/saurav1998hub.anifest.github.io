import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevEventsComponent } from './prev-events.component';

describe('PrevEventsComponent', () => {
  let component: PrevEventsComponent;
  let fixture: ComponentFixture<PrevEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevEventsComponent]
    });
    fixture = TestBed.createComponent(PrevEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
