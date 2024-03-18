import { Component } from '@angular/core';
import { SpellsService } from 'src/app/services/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
})
export class SpellsComponent {
  spells: any[] = [];

  constructor(private spellsService: SpellsService) {}

  ngOnInit(): void {
    this.spellsService.getSpells().subscribe((data) => {
      this.spells = data;
    });
  }
}
