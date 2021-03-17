import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFreeLinkComponent } from './send-free-link.component';

describe('SendFreeLinkComponent', () => {
  let component: SendFreeLinkComponent;
  let fixture: ComponentFixture<SendFreeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendFreeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFreeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
