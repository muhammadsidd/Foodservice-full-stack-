import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCreateComponent } from './kitchen-create.component';

describe('KitchenCreateComponent', () => {
  let component: KitchenCreateComponent;
  let fixture: ComponentFixture<KitchenCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
