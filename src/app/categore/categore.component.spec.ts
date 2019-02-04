import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreComponent } from './categore.component';

describe('CategoreComponent', () => {
  let component: CategoreComponent;
  let fixture: ComponentFixture<CategoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
