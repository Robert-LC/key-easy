import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoViewComponent } from './piano-view.component';

describe('PianoViewComponent', () => {
  let component: PianoViewComponent;
  let fixture: ComponentFixture<PianoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
