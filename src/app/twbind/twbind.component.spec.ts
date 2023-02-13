import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwbindComponent } from './twbind.component';

describe('TwbindComponent', () => {
  let component: TwbindComponent;
  let fixture: ComponentFixture<TwbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwbindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
