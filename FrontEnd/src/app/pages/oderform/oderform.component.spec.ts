import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderformComponent } from './oderform.component';

describe('OderformComponent', () => {
  let component: OderformComponent;
  let fixture: ComponentFixture<OderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
