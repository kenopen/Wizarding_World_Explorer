import { Component } from '@angular/core';
import { ElixirsService } from 'src/app/services/elixirs.service';

@Component({
  selector: 'app-elixirs',
  templateUrl: './elixirs.component.html',
  styleUrls: ['./elixirs.component.css'],
})
export class ElixirsComponent {
  elixirs: any[] = [];

  constructor(private elixirsService: ElixirsService) {}

  ngOnInit(): void {
    this.elixirsService.getElixirs().subscribe((data) => {
      this.elixirs = data;
    });
  }
}
