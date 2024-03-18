import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-house-dialog',
  templateUrl: './house-dialog.component.html',
  styleUrls: ['./house-dialog.component.css'],
})
export class HouseDialogComponent {
  showMoreInfo = false;

  constructor(@Inject(MAT_DIALOG_DATA) public house: any) {}

  toggleMoreInfo(event: Event): void {
    event.preventDefault();
    this.showMoreInfo = !this.showMoreInfo;
  }

  getHouseCrestImageUrl(houseName: string): string {
    // Function to get the house crest image URL
    return `assets/house-crests/${houseName.toLowerCase()}.png`;
  }

  getTraits(traits: any[]): string {
    return traits.map((trait) => trait.name).join(', ');
  }

  getNotableMembers(members: any[]): string {
    if (!members || members.length === 0) {
      return 'None';
    }
    return members
      .map((member) => member.firstName + ' ' + member.lastName)
      .join(', ');
  }

  getDialogConfig(): MatDialogConfig {
    const config = new MatDialogConfig();
    config.width = 'auto'; // Set width to auto
    config.minHeight = '300px'; // Set minimum height
    return config;
  }
}
