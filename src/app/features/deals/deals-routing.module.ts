import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealListingComponent } from './list/deal-listing/deal-listing.component';

const routes: Routes = [
  {
    path: '',
    component: DealListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealsRoutingModule {}
