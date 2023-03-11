import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCompComponent } from './completed-comp.component';

describe('CompletedCompComponent', () => {
  let component: CompletedCompComponent;
  let fixture: ComponentFixture<CompletedCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedCompComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CompletedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
