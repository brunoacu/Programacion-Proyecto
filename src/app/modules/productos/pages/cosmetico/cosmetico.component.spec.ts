import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticoComponent } from './cosmetico.component';

describe('CosmeticoComponent', () => {
  let component: CosmeticoComponent;
  let fixture: ComponentFixture<CosmeticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CosmeticoComponent]
    });
    fixture = TestBed.createComponent(CosmeticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
