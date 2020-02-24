import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionsDetailsComponent } from './traditions-details.component';

describe('TraditionsDetailsComponent', () => {
  let component: TraditionsDetailsComponent;
  let fixture: ComponentFixture<TraditionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
