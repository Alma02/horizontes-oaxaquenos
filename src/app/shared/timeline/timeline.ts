import { Component, input } from '@angular/core';
import { ParadaTour } from '../../core/models/tour.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  readonly paradas = input<ParadaTour[]>([]);
}
