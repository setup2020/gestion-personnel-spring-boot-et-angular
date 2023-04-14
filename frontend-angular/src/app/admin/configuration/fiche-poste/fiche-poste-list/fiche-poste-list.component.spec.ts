import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePosteListComponent } from './fiche-poste-list.component';

describe('FichePosteListComponent', () => {
  let component: FichePosteListComponent;
  let fixture: ComponentFixture<FichePosteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichePosteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePosteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
