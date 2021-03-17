import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiOldComponent } from './regi-old.component';

describe('RegiOldComponent', () => {
  let component: RegiOldComponent;
  let fixture: ComponentFixture<RegiOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
