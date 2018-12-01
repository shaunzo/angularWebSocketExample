import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterboxMessageComponent } from './chatterbox-message.component';

describe('ChatterboxMessageComponent', () => {
  let component: ChatterboxMessageComponent;
  let fixture: ComponentFixture<ChatterboxMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterboxMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterboxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
