import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElixirsComponent } from './elixirs.component';
import { ElixirsService } from 'src/app/services/elixirs.service';
import { of } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('ElixirsComponent', () => {
  let component: ElixirsComponent;
  let fixture: ComponentFixture<ElixirsComponent>;
  let elixirsServiceSpy: jasmine.SpyObj<ElixirsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ElixirsService', ['getElixirs']);
    await TestBed.configureTestingModule({
      declarations: [ElixirsComponent],
      providers: [{ provide: ElixirsService, useValue: spy }],
      imports: [MatPaginatorModule, MatFormFieldModule, MatSelectModule],
    }).compileComponents();
    elixirsServiceSpy = TestBed.inject(
      ElixirsService
    ) as jasmine.SpyObj<ElixirsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElixirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
