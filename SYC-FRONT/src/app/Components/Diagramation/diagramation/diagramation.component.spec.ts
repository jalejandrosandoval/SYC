import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramationComponent } from './diagramation.component';

describe('DiagramationComponent', () => {
  let component: DiagramationComponent;
  let fixture: ComponentFixture<DiagramationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
