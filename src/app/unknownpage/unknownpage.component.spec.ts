import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownpageComponent } from './unknownpage.component';

describe('UnknownpageComponent', () => {
  let component: UnknownpageComponent;
  let fixture: ComponentFixture<UnknownpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
