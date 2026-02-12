import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanQR } from './scan-qr';

describe('ScanQR', () => {
  let component: ScanQR;
  let fixture: ComponentFixture<ScanQR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScanQR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanQR);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
