import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEgComponent } from './comp-eg.component';

describe('CompEgComponent', () => {
  let component: CompEgComponent;
  let fixture: ComponentFixture<CompEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompEgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
