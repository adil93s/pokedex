import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiniteDetailsComponent } from './affinite-details.component';

describe('AffiniteDetailsComponent', () => {
  let component: AffiniteDetailsComponent;
  let fixture: ComponentFixture<AffiniteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiniteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiniteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
