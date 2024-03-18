import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { SpellsComponent } from './components/spells/spells.component';

const routes: Routes = [
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
  { path: 'houses', component: HousesComponent },
  { path: 'spells', component: SpellsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
