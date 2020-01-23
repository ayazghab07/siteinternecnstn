import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdscformsComponent } from './tabdscforms.component';

describe('TabdscformsComponent', () => {
  let component: TabdscformsComponent;
  let fixture: ComponentFixture<TabdscformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabdscformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabdscformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
