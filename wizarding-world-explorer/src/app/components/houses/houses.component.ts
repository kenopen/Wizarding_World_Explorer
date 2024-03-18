import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HouseDialogComponent } from '../house-dialog/house-dialog.component';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: any[] = [];
  houseCrestBaseUrl = 'assets/house-crests/';

  constructor(private housesService: HousesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((data: any) => {
      this.houses = data;
    });
  }

  openDialog(houseId: string): void {
    this.housesService.getHouseById(houseId).subscribe((houseData: any) => {
      const config = this.getDialogConfig(); // Get dialog configuration
      config.data = houseData; // Assign house data to the dialog configuration
      this.dialog.open(HouseDialogComponent, config); // Open the dialog with the configuration
    });
  }

  getHouseCrestImageUrl(houseName: string): string {
    return `${this.houseCrestBaseUrl}${houseName.toLowerCase()}.png`;
  }

  getDialogConfig(): MatDialogConfig {
    const config = new MatDialogConfig();
    config.width = 'auto'; // Set width to auto
    config.minHeight = '300px'; // Set minimum height
    return config;
  }
}
