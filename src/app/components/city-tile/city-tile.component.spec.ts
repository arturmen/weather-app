import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTileComponent } from './city-tile.component';

describe('CityTileComponent', () => {
  let component: CityTileComponent;
  let fixture: ComponentFixture<CityTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
