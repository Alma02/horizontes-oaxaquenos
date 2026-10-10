import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../../core/services/tours.service';
import { Timeline } from '../../shared/timeline/timeline';
import { WhatsappService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-tour-detail-page',
  standalone: true,
  imports: [NgOptimizedImage, Timeline],
  templateUrl: './tour-detail.html',
  styleUrl: './tour-detail.scss',
})
export class TourDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly toursService = inject(ToursService);

  readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';
  readonly tour = this.toursService.getTourPorSlug(this.slug);
  
  constructor(private whatsapp: WhatsappService) {}

  reservarTour(): void {
    const url = this.whatsapp.generarLinkReserva(this.tour!);
    window.open(url, '_blank');
  }
}
