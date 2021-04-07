import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenRegisterComponent } from './kitchen-register.component';

describe('KitchenRegisterComponent', () => {
  let component: KitchenRegisterComponent;
  let fixture: ComponentFixture<KitchenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
