import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTitularComponent } from './detalle-titular.component';

describe('DetalleTitularComponent', () => {
  let component: DetalleTitularComponent;
  let fixture: ComponentFixture<DetalleTitularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTitularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
