import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealListingComponent } from './deal-listing.component';

describe('DealListingComponent', () => {
  let component: DealListingComponent;
  let fixture: ComponentFixture<DealListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
