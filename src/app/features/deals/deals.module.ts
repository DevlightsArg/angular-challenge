import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealListingComponent } from './list/deal-listing/deal-listing.component';
import { DealsService } from './deals.service';
import { DealsRoutingModule } from './deals-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DealListingComponent],
  imports: [CommonModule, DealsRoutingModule, HttpClientModule],
  providers: [DealsService],
})
export class DealsModule {}
