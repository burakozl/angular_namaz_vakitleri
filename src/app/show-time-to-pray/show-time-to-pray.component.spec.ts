import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimeToPrayComponent } from './show-time-to-pray.component';

describe('ShowTimeToPrayComponent', () => {
  let component: ShowTimeToPrayComponent;
  let fixture: ComponentFixture<ShowTimeToPrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimeToPrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTimeToPrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
