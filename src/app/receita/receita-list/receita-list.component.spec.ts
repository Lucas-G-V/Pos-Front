import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaListComponent } from './receita-list.component';

describe('ReceitaListComponent', () => {
  let component: ReceitaListComponent;
  let fixture: ComponentFixture<ReceitaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
