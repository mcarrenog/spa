import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHeroeComponent } from './filtro-heroe.component';

describe('FiltroHeroeComponent', () => {
  let component: FiltroHeroeComponent;
  let fixture: ComponentFixture<FiltroHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
