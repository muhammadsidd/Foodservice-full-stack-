import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUserListComponent } from './regular-user-list.component';

describe('RegularUserListComponent', () => {
  let component: RegularUserListComponent;
  let fixture: ComponentFixture<RegularUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
