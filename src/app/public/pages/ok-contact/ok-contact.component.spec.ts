import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkContactComponent } from './ok-contact.component';

describe('OkContactComponent', () => {
  let component: OkContactComponent;
  let fixture: ComponentFixture<OkContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
