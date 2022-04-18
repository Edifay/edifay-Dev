import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Me } from './me';

describe('MeComponent', () => {
  let component: Me;
  let fixture: ComponentFixture<Me>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Me ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Me);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
