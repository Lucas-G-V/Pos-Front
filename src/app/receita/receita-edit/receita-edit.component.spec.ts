import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaEditComponent } from './receita-edit.component';

describe('ReceitaEditComponent', () => {
  let component: ReceitaEditComponent;
  let fixture: ComponentFixture<ReceitaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
