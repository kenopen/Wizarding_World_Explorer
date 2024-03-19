import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpellsService } from 'src/app/services/spells.service';
import { SpellsComponent } from './spells.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('SpellsComponent', () => {
  let component: SpellsComponent;
  let fixture: ComponentFixture<SpellsComponent>;
  let mockSpellsService: jasmine.SpyObj<SpellsService>;

  beforeEach(async () => {
    mockSpellsService = jasmine.createSpyObj('SpellsService', [
      'getSpells',
      'getSpellById',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SpellsComponent],
      imports: [BrowserAnimationsModule, MatSelectModule, MatPaginatorModule],
      providers: [
        { provide: SpellsService, useValue: mockSpellsService },
        MatPaginator,
        MatSort,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply filter', () => {
    //   const searchValue = 'spell';
    //   const typeValue = 'Charm';
    //   const lightValue = 'Red';
    //   const spellsData = [
    //     {
    //       id: 1,
    //       name: 'Spell 1',
    //       type: 'Charm',
    //       effect: 'Effect 1',
    //       light: 'Red',
    //     },
    //     {
    //       id: 2,
    //       name: 'Spell 2',
    //       type: 'Transfiguration',
    //       effect: 'Effect 2',
    //       light: 'Blue',
    //     },
    //   ];
    //   const mockDataSource = new MatTableDataSource(spellsData);
    //   spyOn(mockDataSource, 'filter').and.callThrough(); // Spy on the filter method
    //   component.allSpells = mockDataSource;
    //   const filterValue = {
    //     name: searchValue,
    //     type: typeValue,
    //     light: lightValue,
    //   };
    //   component.applyFilter(filterValue);
    //   expect(mockDataSource.filter).toHaveBeenCalledWith(filterValue);
    //   expect(component.filteredSpells.length).toBe(1);
    //   expect(component.filteredSpells[0].name).toBe('Spell 1');
  });

  it('should expand spell', () => {
    // const spellId = '1';
    // const spellData = { id: '1', name: 'Spell 1', effect: 'Effect 1' };
    // mockSpellsService.getSpellById.and.returnValue(of(spellData));
    // component.onSpellClicked(spellId);
    // expect(mockSpellsService.getSpellById).toHaveBeenCalledWith(spellId);
    // expect(component.expandedSpell).toEqual(spellData);
  });
});
