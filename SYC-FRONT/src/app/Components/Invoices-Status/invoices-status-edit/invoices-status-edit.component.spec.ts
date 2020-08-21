import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesStatusEditComponent } from './invoices-status-edit.component';

describe('InvoicesStatusEditComponent', () => {
  let component: InvoicesStatusEditComponent;
  let fixture: ComponentFixture<InvoicesStatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesStatusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
