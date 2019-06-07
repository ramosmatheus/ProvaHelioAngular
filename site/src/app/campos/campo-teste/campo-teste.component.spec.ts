import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTesteComponent } from './campo-teste.component';

describe('CampoTesteComponent', () => {
  let component: CampoTesteComponent;
  let fixture: ComponentFixture<CampoTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
