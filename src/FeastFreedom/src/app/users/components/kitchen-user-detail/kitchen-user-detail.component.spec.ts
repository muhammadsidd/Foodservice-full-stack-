import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenUserDetailComponent } from './kitchen-user-detail.component';

describe('KitchenUserDetailComponent', () => {
  let component: KitchenUserDetailComponent;
  let fixture: ComponentFixture<KitchenUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
