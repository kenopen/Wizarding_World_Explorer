import { Component, OnInit } from '@angular/core';
import { ElixirsService } from 'src/app/services/elixirs.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-elixirs',
  templateUrl: './elixirs.component.html',
  styleUrls: ['./elixirs.component.css'],
})
export class ElixirsComponent implements OnInit {
  elixirs: any[] = [];
  filteredElixirs: any[] = [];
  allElixirs: MatTableDataSource<any> = new MatTableDataSource<any>();
  expandedElixir: any | null = null;

  columnsToDisplay = ['name', 'difficulty', 'expand'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];
  constructor(private elixirsService: ElixirsService) {}

  ngOnInit(): void {
    this.elixirsService.getElixirs().subscribe((data) => {
      this.elixirs = data;
      this.filteredElixirs = data;
      this.allElixirs = new MatTableDataSource<any>(this.filteredElixirs);
    });
  }

  applyFilter(difficulty: string, searchValue: string) {
    // Filter by difficulty
    if (difficulty && difficulty !== '') {
      this.filteredElixirs = this.elixirs.filter(
        (elixir) => elixir.difficulty === difficulty
      );
    } else {
      this.filteredElixirs = this.elixirs.slice();
    }

    // Filter by search value
    if (searchValue && searchValue.trim() !== '') {
      this.filteredElixirs = this.filteredElixirs.filter(
        (elixir) =>
          (elixir.name &&
            elixir.name.toLowerCase().includes(searchValue.toLowerCase())) ||
          (elixir.effect &&
            elixir.effect.toLowerCase().includes(searchValue.toLowerCase())) ||
          (elixir.ingredients &&
            elixir.ingredients.some((ingredient: any) =>
              ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
            ))
      );
    }

    // Update the displayed data
    this.allElixirs.data = this.filteredElixirs;
  }

  //TODO: Add reset filters button code

  toggleExpanded(elixir: any) {
    this.expandedElixir = this.expandedElixir === elixir ? null : elixir;
  }
}
