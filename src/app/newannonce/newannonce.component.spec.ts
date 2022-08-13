import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewannonceComponent } from './newannonce.component';

describe('NewannonceComponent', () => {
  let component: NewannonceComponent;
  let fixture: ComponentFixture<NewannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewannonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
