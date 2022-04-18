import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjects } from './my-projects';

describe('MyProjectsComponent', () => {
  let component: MyProjects;
  let fixture: ComponentFixture<MyProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjects ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
