import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToursService } from '../../core/services/tours.service';
import { TourCard } from '../../shared/tour-card/tour-card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, TourCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  private readonly toursService = inject(ToursService);
  readonly tours = this.toursService.getTours();
}
