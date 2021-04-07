import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUserUpdateComponent } from './regular-user-update.component';

describe('RegularUserUpdateComponent', () => {
  let component: RegularUserUpdateComponent;
  let fixture: ComponentFixture<RegularUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
