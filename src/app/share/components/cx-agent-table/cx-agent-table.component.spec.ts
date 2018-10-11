import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxAgentTableComponent } from './cx-agent-table.component';

describe('CxAgentTableComponent', () => {
  let component: CxAgentTableComponent;
  let fixture: ComponentFixture<CxAgentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxAgentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxAgentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
