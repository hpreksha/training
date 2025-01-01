import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEgComponent } from './service-eg.component';

describe('ServiceEgComponent', () => {
  let component: ServiceEgComponent;
  let fixture: ComponentFixture<ServiceEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceEgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
