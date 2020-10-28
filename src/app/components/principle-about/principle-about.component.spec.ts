import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleAboutComponent } from './principle-about.component';

describe('PrincipleAboutComponent', () => {
  let component: PrincipleAboutComponent;
  let fixture: ComponentFixture<PrincipleAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
