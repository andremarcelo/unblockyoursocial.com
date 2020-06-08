import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendManagerComponent } from './frontend-manager.component';

describe('FrontendManagerComponent', () => {
  let component: FrontendManagerComponent;
  let fixture: ComponentFixture<FrontendManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
