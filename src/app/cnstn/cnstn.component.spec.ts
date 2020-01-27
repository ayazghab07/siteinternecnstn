import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnstnComponent } from './cnstn.component';

describe('CnstnComponent', () => {
  let component: CnstnComponent;
  let fixture: ComponentFixture<CnstnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnstnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnstnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
