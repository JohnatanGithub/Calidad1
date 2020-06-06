import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROVEEDORComponent } from './proveedor.component';

describe('PROVEEDORComponent', () => {
  let component: PROVEEDORComponent;
  let fixture: ComponentFixture<PROVEEDORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROVEEDORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROVEEDORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
