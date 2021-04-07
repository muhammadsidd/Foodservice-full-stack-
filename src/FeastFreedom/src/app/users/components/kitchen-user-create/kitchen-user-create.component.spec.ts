import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenUserCreateComponent } from './kitchen-user-create.component';

describe('KitchenUserCreateComponent', () => {
  let component: KitchenUserCreateComponent;
  let fixture: ComponentFixture<KitchenUserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenUserCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
