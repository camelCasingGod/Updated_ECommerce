import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberItemsComponent } from './number-items.component';

describe('NumberItemsComponent', () => {
  let component: NumberItemsComponent;
  let fixture: ComponentFixture<NumberItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
