import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfoterComponent } from './myfoter.component';

describe('MyfoterComponent', () => {
  let component: MyfoterComponent;
  let fixture: ComponentFixture<MyfoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
