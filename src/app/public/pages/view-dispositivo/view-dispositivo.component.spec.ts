import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDispositivoComponent } from './view-dispositivo.component';

describe('ViewDispositivoComponent', () => {
  let component: ViewDispositivoComponent;
  let fixture: ComponentFixture<ViewDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDispositivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
