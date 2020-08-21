import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesStatusComponent } from './invoices-status.component';

describe('InvoicesStatusComponent', () => {
  let component: InvoicesStatusComponent;
  let fixture: ComponentFixture<InvoicesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
