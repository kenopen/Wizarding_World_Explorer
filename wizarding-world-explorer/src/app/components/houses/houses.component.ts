import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: any[] = [];

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((data) => {
      this.houses = data;
    });
  }
}
