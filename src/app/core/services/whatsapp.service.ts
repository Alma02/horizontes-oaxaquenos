// core/services/whatsapp.service.ts
import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly numero = '5219515479885'; // 52 (México) + tu número a 10 dígitos

  generarLinkReserva(tour: Tour): string {
    const mensaje = `Hola, me gustaría reservar el tour "${tour.nombre}". ¿Me pueden dar más información sobre disponibilidad?`;
    return `https://wa.me/${this.numero}?text=${encodeURIComponent(mensaje)}`;
  }
}