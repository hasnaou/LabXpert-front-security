import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEchantillonComponent } from './ajout-echantillon.component';

describe('AjoutEchantillonComponent', () => {
  let component: AjoutEchantillonComponent;
  let fixture: ComponentFixture<AjoutEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEchantillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
