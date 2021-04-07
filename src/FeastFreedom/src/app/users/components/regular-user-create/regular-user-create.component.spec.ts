import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUserCreateComponent } from './regular-user-create.component';

describe('RegularUserCreateComponent', () => {
  let component: RegularUserCreateComponent;
  let fixture: ComponentFixture<RegularUserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularUserCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
