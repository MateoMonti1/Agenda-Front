import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkDeleteContactsComponent } from './ok-delete-contacts.component';

describe('OkDeleteContactsComponent', () => {
  let component: OkDeleteContactsComponent;
  let fixture: ComponentFixture<OkDeleteContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkDeleteContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkDeleteContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
