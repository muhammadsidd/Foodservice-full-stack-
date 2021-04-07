import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenUserListComponent } from './kitchen-user-list.component';

describe('KitchenUserListComponent', () => {
  let component: KitchenUserListComponent;
  let fixture: ComponentFixture<KitchenUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
