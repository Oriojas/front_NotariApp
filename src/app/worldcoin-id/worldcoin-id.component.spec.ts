import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcoinIdComponent } from './worldcoin-id.component';

describe('WorldcoinIdComponent', () => {
  let component: WorldcoinIdComponent;
  let fixture: ComponentFixture<WorldcoinIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldcoinIdComponent]
    });
    fixture = TestBed.createComponent(WorldcoinIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
