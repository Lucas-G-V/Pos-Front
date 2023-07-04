import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCreateComponent } from './receita-create.component';

describe('ReceitaCreateComponent', () => {
  let component: ReceitaCreateComponent;
  let fixture: ComponentFixture<ReceitaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
