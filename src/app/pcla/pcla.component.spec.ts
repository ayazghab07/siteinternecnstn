import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PclaComponent } from './pcla.component';

describe('PclaComponent', () => {
  let component: PclaComponent;
  let fixture: ComponentFixture<PclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
