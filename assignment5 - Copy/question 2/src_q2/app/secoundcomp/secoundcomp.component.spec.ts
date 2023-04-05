import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundcompComponent } from './secoundcomp.component';

describe('SecoundcompComponent', () => {
  let component: SecoundcompComponent;
  let fixture: ComponentFixture<SecoundcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecoundcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
