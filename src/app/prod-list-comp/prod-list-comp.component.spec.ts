import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListCompComponent } from './prod-list-comp.component';

describe('ProdListCompComponent', () => {
  let component: ProdListCompComponent;
  let fixture: ComponentFixture<ProdListCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdListCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
