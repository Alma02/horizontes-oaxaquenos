export interface ParadaTour {
  nombre: string;
  descripcion: string;
  imagen?: string;
}

export interface Tour {
  slug: string;
  nombre: string;
  fecha: string;                  // ahora es string (en privado depende del cliente)
  descripcionCorta: string;
  descripcionLarga: string;
  imagenPortada: string;
  duracionHoras?: number;        // ahora opcional (en privado depende del cliente)
  precio?: number;               // opcional
  esCotizable?: boolean;         // true = mostrar "Cotiza aquí" en vez de precio
  horarioSalida?: string;        // puede ser texto libre tipo "A convenir"
  puntoEncuentro?: string;
  incluye: string[];
  noIncluye: string[];
  paradas: ParadaTour[];         // puede ir vacío []
  galeria: string[];
}