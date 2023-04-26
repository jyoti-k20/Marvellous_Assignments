import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcopmComponent } from './newcopm.component';

describe('NewcopmComponent', () => {
  let component: NewcopmComponent;
  let fixture: ComponentFixture<NewcopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcopmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
