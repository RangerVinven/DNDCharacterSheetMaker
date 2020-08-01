import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMakerComponent } from './character-maker.component';

describe('CharacterMakerComponent', () => {
  let component: CharacterMakerComponent;
  let fixture: ComponentFixture<CharacterMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
