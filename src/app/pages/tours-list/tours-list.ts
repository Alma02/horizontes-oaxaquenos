import { Component, inject } from '@angular/core';
import { ToursService } from '../../core/services/tours.service';
import { TourCard } from '../../shared/tour-card/tour-card';

@Component({
  selector: 'app-tours-list-page',
  standalone: true,
  imports: [TourCard],
  templateUrl: './tours-list.html',
  styleUrl: './tours-list.scss',
})
export class ToursListPage {
  private readonly toursService = inject(ToursService);
  readonly tours = this.toursService.getTours();
}
