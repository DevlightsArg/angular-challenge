import { Component, OnInit } from '@angular/core';
import { DealsService } from '../../deals.service';

@Component({
  selector: 'app-deal-listing',
  templateUrl: './deal-listing.component.html',
  styleUrls: ['./deal-listing.component.css'],
})
export class DealListingComponent implements OnInit {
  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {
    console.log('List component inited.');
  }
}
