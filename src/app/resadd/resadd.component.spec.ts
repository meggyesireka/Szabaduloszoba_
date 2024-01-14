import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaddComponent } from './resadd.component';

describe('ResaddComponent', () => {
  let component: ResaddComponent;
  let fixture: ComponentFixture<ResaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
