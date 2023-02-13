import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagcolorComponent } from './tagcolor.component';

describe('TagcolorComponent', () => {
  let component: TagcolorComponent;
  let fixture: ComponentFixture<TagcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagcolorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
