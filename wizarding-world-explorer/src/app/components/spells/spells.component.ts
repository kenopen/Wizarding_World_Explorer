import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SpellsService } from 'src/app/services/spells.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SpellsComponent implements OnInit, AfterViewInit {
  allSpells: MatTableDataSource<any> = new MatTableDataSource<any>();
  expandedSpell: any;

  columnsToDisplay = ['name', 'type', 'effect', 'incantation', 'expand'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  //TODO: Dynamically build list based on data
  spellTypes: string[] = [
    'Charm',
    'Conjuration',
    'Transfiguration',
    'DarkCharm',
    'HealingSpell',
    'Jinx',
    'Curse',
    'Spell',
    'MagicalTransportation',
  ];

  //TODO: Dynamically build list based on data
  spellLights: string[] = [
    'Blue',
    'IcyBlue',
    'Red',
    'Gold',
    'Purple',
    'Transparent',
    'White',
    'None',
    'Orange',
    'Green',
    'Yellow',
  ];

  constructor(private spellsService: SpellsService) {}

  ngAfterViewInit() {
    this.allSpells.paginator = this.paginator;
    this.allSpells.sort = this.sort;
    this.paginator.pageSize = 25;
  }

  ngOnInit(): void {
    this.spellsService.getSpells().subscribe((data: any) => {
      this.allSpells.data = data; // Initialize MatTableDataSource
    });
  }

  onSpellClicked(spellId: string) {
    this.spellsService.getSpellById(spellId).subscribe((spellData: any) => {
      this.expandedSpell = spellData;
    });
  }

  applyFilter(value: string | undefined) {
    if (!value) {
      // If the filter value is undefined, show all spells
      this.allSpells.filter = '';
      return;
    }

    // Trim whitespace from the filter value
    value = value.trim().toLowerCase();

    // Apply the filter
    this.allSpells.filter = value;
  }
}
