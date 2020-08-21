import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesStatusCreateComponent } from './invoices-status-create.component';

describe('InvoicesStatusCreateComponent', () => {
  let component: InvoicesStatusCreateComponent;
  let fixture: ComponentFixture<InvoicesStatusCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesStatusCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesStatusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
