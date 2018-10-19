import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumArticleComponent } from './medium-article.component';

describe('MediumArticleComponent', () => {
  let component: MediumArticleComponent;
  let fixture: ComponentFixture<MediumArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
