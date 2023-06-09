import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOrganisationComponent } from './type-organisation.component';

describe('TypeOrganisationComponent', () => {
  let component: TypeOrganisationComponent;
  let fixture: ComponentFixture<TypeOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOrganisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
