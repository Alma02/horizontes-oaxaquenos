import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tour } from '../../core/models/tour.model';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './tour-card.html',
  styleUrl: './tour-card.scss',
})
export class TourCard {
  readonly tour = input.required<Tour>();
}
