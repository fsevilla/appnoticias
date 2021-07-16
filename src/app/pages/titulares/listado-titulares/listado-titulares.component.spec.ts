import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTitularesComponent } from './listado-titulares.component';

describe('ListadoTitularesComponent', () => {
  let component: ListadoTitularesComponent;
  let fixture: ComponentFixture<ListadoTitularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTitularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTitularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
