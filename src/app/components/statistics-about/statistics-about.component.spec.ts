import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsAboutComponent } from './statistics-about.component';

describe('StatisticsAboutComponent', () => {
  let component: StatisticsAboutComponent;
  let fixture: ComponentFixture<StatisticsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
