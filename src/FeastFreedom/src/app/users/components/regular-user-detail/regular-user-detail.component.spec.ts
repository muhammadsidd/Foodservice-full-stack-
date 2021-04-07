import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUserDetailComponent } from './regular-user-detail.component';

describe('RegularUserDetailComponent', () => {
  let component: RegularUserDetailComponent;
  let fixture: ComponentFixture<RegularUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
