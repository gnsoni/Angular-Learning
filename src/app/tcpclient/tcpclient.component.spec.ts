import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tcpclientComponent } from './tcpclient.component';

describe('ContactusComponent', () => {
  let component: tcpclientComponent;
  let fixture: ComponentFixture<tcpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tcpclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tcpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
