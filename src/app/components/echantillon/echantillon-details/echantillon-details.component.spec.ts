import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchantillonDetailsComponent } from './echantillon-details.component';

describe('EchantillonDetailsComponent', () => {
  let component: EchantillonDetailsComponent;
  let fixture: ComponentFixture<EchantillonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchantillonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchantillonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
