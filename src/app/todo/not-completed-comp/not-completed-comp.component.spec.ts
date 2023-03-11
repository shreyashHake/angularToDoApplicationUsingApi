import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCompletedCompComponent } from './not-completed-comp.component';

describe('NotCompletedCompComponent', () => {
  let component: NotCompletedCompComponent;
  let fixture: ComponentFixture<NotCompletedCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotCompletedCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotCompletedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
