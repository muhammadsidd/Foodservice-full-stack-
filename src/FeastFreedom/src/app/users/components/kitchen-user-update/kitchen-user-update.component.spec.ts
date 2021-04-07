import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenUserUpdateComponent } from './kitchen-user-update.component';

describe('KitchenUserUpdateComponent', () => {
  let component: KitchenUserUpdateComponent;
  let fixture: ComponentFixture<KitchenUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
