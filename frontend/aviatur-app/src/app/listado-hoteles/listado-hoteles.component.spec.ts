import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHotelesComponent } from './listado-hoteles.component';

describe('ListadoHotelesComponent', () => {
  let component: ListadoHotelesComponent;
  let fixture: ComponentFixture<ListadoHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHotelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
