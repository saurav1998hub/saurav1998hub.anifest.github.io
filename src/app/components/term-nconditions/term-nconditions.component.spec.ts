import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermNconditionsComponent } from './term-nconditions.component';

describe('TermNconditionsComponent', () => {
  let component: TermNconditionsComponent;
  let fixture: ComponentFixture<TermNconditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermNconditionsComponent]
    });
    fixture = TestBed.createComponent(TermNconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
