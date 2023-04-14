import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePosteAddComponent } from './fiche-poste-add.component';

describe('FichePosteAddComponent', () => {
  let component: FichePosteAddComponent;
  let fixture: ComponentFixture<FichePosteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichePosteAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePosteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
