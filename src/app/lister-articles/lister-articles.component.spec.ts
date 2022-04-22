import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerArticlesComponent } from './lister-articles.component';

describe('ListerArticlesComponent', () => {
  let component: ListerArticlesComponent;
  let fixture: ComponentFixture<ListerArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
