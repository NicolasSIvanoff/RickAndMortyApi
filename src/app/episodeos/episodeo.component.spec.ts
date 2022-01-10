import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeoComponent } from './episodeo.component';

describe('EpisodeoComponent', () => {
  let component: EpisodeoComponent;
  let fixture: ComponentFixture<EpisodeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
