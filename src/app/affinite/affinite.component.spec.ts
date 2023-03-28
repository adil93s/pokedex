import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiniteComponent } from './affinite.component';

describe('AffiniteComponent', () => {
  let component: AffiniteComponent;
  let fixture: ComponentFixture<AffiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
