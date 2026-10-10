import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';

@Injectable({
  providedIn: 'root',
})
export class ToursService {
  private readonly tours: Tour[] = [
    {
      slug: 'noche-de-muertos',
      nombre: 'Noche de Muertos en Oaxaca',
      fecha: '31 de octubre de 2026',
      descripcionCorta:
        'Vive de cerca la tradición del Día de Muertos entre campos de cempasúchil, velas, copal y panteones de Oaxaca.',
      descripcionLarga:
        'El 31 de octubre de 2026, acompáñanos en una noche para vivir la tradición del Día de Muertos con respeto y cercanía. De 7:00 p.m. a 12:00 a.m., visitaremos un campo de cempasúchil iluminado, el panteón de Arrazola y el panteón antiguo de Santa Cruz Xoxocotlán, donde las familias velan a sus seres queridos entre música, flores y ofrendas. En Xoxocotlán, tradicionalmente sale la procesión con San Sebastián alrededor de las 11:00 p.m.',
      imagenPortada: 'assets/images/muertos-portada.jpeg',
      duracionHoras: 5,
      precio: 900,
      horarioSalida: '07:00 p.m.',
      puntoEncuentro: 'Zócalo de Oaxaca; salida y regreso',
      incluye: [
        'Transporte redondo desde y hacia el Zócalo',
        'Guía durante todo el recorrido',
        'Explicación cultural del significado de las ofrendas, flores y velas',
      ],
      noIncluye: [
        'Alimentos y bebidas',
        'Propinas',
        'Compras personales',
        'Aportaciones y entradas',
      ],
      paradas: [
        {
          nombre: 'Punto de encuentro',
          descripcion:
            'Si te hospedas en la zona del centro histórico, pasamos por ti directo a tu hotel a las 7:00 pm. Si prefieres, también puedes llegar por tu cuenta a nuestro punto de reunión frente a la Catedral de Oaxaca, a la misma hora, para iniciar juntos la aventura.',
          imagen:
            'assets/images/monte-alban-1.jpeg',
        },
        {
          nombre: 'Campo de cempasúchil iluminado · 7:30 p.m.',
          descripcion:
            'Camina entre flores de cempasúchil en su punto más alto y conoce cómo su aroma guía a las almas de regreso a casa.',
          imagen: 'assets/images/cempasúchil.jpeg',
        },
        {
          nombre: 'Panteón de Arrazola · 8:30 p.m.',
          descripcion:
            'Conoce la cuna de los alebrijes y recorre su panteón adornado con flores y veladoras, con una explicación del significado de la tradición.',
          imagen: 'assets/images/alebrijes.jpeg',
        },
        {
          nombre: 'Panteón de Santa Cruz Xoxocotlán · 9:30 p.m.',
          descripcion:
            'Recorre el panteón antiguo y la capilla de San Sebastián mientras las familias velan a sus seres queridos con música, flores y ofrendas. Tradicionalmente, la procesión con San Sebastián sale alrededor de las 11:00 p.m.',
          imagen: 'assets/images/velas.jpeg',
        },
        {
          nombre: 'Fin del recorrido',
          descripcion:
            'El tour concluye aproximadamente a las 12:00 am. Te dejamos directo en tu hotel, o si prefieres seguir disfrutando el centro histórico de Oaxaca por tu cuenta, te dejamos ahí mismo.',
          imagen:
            'assets/images/cuilapam.jpeg',
        },
      ],
      galeria: [
        'assets/images/dia-de-muertos.jpeg',
        'assets/images/dia-de-muertos-2.jpeg',
        'assets/images/dia-de-muertos-3.jpeg',
        'assets/images/dia-de-muertos-4.jpeg',
        'assets/images/dia-de-muertos-5.jpeg',
        'assets/images/dia-de-muertos-6.jpeg',
      ],
    },
    {
      slug: 'hierve-el-agua',
      fecha: 'Salida todos los días',
      nombre: 'Hierve el Agua',
      descripcionCorta:
        'Un recorrido entre pueblos, artesanías y paisajes naturales que culmina en una de las maravillas más fotogénicas de Oaxaca.',
      descripcionLarga:
        'Este tour combina historia, cultura y naturaleza en una sola jornada. Partimos por comunidades reconocidas por su artesanía, seguimos con sitios emblemáticos de la región y culminamos en Hierve el Agua, un espectacular sitio natural con cascadas petrificadas y vistas impresionantes del valle. Es una experiencia contemplativa, fotogénica y profundamente ligada a la identidad oaxaqueña.',
      imagenPortada: 'assets/images/hierve-el-agua-portada.jpeg',
      duracionHoras: 10,
      precio: 900,
      horarioSalida: '07:30 a.m.',
      puntoEncuentro: 'Plaza de la Soledad, Oaxaca',
      incluye: [
        'Traslado redondo',
        'Guía turístico',
        'Seguro básico de viaje',
      ],
      noIncluye: [
        'Alimentos extra',
        'Bebidas alcohólicas',
        'Souvenirs y compras personales',
      ],
      paradas: [
        {
          nombre: 'Punto de encuentro',
          descripcion:
            'Si te hospedas en la zona del centro histórico, pasamos por ti directo a tu hotel a las 8:00 pm. Si prefieres, también puedes llegar por tu cuenta a nuestro punto de reunión frente a la Catedral de Oaxaca, a la misma hora, para iniciar juntos la aventura.',
          imagen:
            'assets/images/monte-alban-1.jpeg',
        },
        {
          nombre: 'Árbol del Tule',
          descripcion:
            'Un árbol monumental, símbolo de vida y resistencia, con una presencia imponente entre los paisajes del valle central.',
          imagen:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        },
        {
          nombre: 'Tapetes de lana',
          descripcion:
            'Descubre el arte textil tradicional con tapetes de lana coloridos y materiales de origen local.',
          imagen:
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
        },
        {
          nombre: 'Taller de velas artesanales',
          descripcion:
            'Recorre un taller donde la cera se convierte en arte, con aromas, colores y técnicas heredadas por generaciones.',
          imagen:
            'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
        },
        {
          nombre: 'Mitla',
          descripcion:
            'Apreciamos la arquitectura y simetría de uno de los sitios arqueológicos más relevantes de la región.',
          imagen:
            'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
        },
        {
          nombre: 'Hierve el Agua',
          descripcion:
            'Las cascadas petrificadas, los miradores y los manantiales crean un escenario inolvidable para disfrutar la naturaleza.',
          imagen: 'assets/images/hierve-el-agua-portada.jpeg',
        },
        {
          nombre: 'Fábrica de mezcal',
          descripcion:
            'Cierra la jornada con una visita a una fábrica artesanal donde aprendemos sobre la historia y producción del mezcal.',
          imagen:
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
        },
        {
          nombre: 'Fin del recorrido',
          descripcion:
            'El tour concluye aproximadamente a las 5:00 pm. Te dejamos directo en tu hotel, o si prefieres seguir disfrutando el centro histórico de Oaxaca por tu cuenta, te dejamos ahí mismo.',
          imagen:
            'assets/images/cuilapam.jpeg',
        },
      ],
      galeria: [
        'assets/images/hierve-el-agua.jpeg',
        'assets/images/tule.jpeg',
        'assets/images/mitla.jpeg',
        'assets/images/tapetes-lana.jpeg',
        'assets/images/mezcal-1.jpeg',
        'assets/images/velas.jpeg',
        
      ],
    },
    {
      slug: 'monte-alban',
      fecha: 'Salida todos los días',
      nombre: 'Monte Albán',
      descripcionCorta:
        'Explora la capital zapoteca en un recorrido lleno de historia, vistas panorámicas y encanto cultural.',
      descripcionLarga:
        'Este tour te lleva a Monte Albán, una de las joyas arqueológicas más importantes de Oaxaca. Recorrerás sus plazas ceremoniales, miradores en la cima y senderos con vistas espectaculares hacia el valle. La experiencia combina historia, cultura y paisajes únicos, con paradas en pueblos artesanales y tradiciones locales que enriquecen el recorrido.',
      imagenPortada:
        'assets/images/monte-alban-portada.jpeg',
      duracionHoras: 8,
      precio: 900,
      horarioSalida: '08:00 a.m.',
      puntoEncuentro: 'Centro histórico de Oaxaca, frente a la Catedral',
      incluye: [
        'Transporte turístico',
        'Guía en español',
        'Degustación de mezcal en una destilería local',
        'Botella de agua',
      ],
      noIncluye: [
        'Alimentos adicionales',
        'Souvenirs',
        'Propinas',
      ],
      paradas: [
        {
          nombre: 'Punto de encuentro',
          descripcion:
            'Si te hospedas en la zona del centro histórico, pasamos por ti directo a tu hotel a las 8:00 am. Si prefieres, también puedes llegar por tu cuenta a nuestro punto de reunión frente a la Catedral de Oaxaca, a la misma hora, para iniciar juntos la aventura.',
          imagen:
            'assets/images/monte-alban-1.jpeg',
        },
        {
          nombre: 'Monte Albán',
          descripcion:
            'Avenida principal de la antigua capital zapoteca, con plazas, tumbas y vistas panorámicas hacia Oaxaca.',
          imagen:
            'assets/images/monte-alban-1.jpeg',
        },
        {
          nombre: 'Alebrijes en Arrazola',
          descripcion:
            'Pueblo mágico reconocido por sus coloridos alebrijes pintados a mano, símbolo del arte oaxaqueño.',
          imagen:
            'assets/images/alebrijes.jpeg',
        },
        {
          nombre: 'Barro negro en San Bartolo',
          descripcion:
            'Conoce la alfarería tradicional en una de las comunidades más famosas por su barro negro y su técnica ancestral.',
          imagen:
            'assets/images/barro-negro.jpeg',
        },
        {
          nombre: 'Fábrica de mezcal',
          descripcion:
            'Descubre el proceso artesanal del mezcal en una destilería familiar con historia, aroma y tradición.',
          imagen:
            'assets/images/mezcal.jpeg',
        },
        {
          nombre: 'Cuilapam de Guerrero',
          descripcion:
            'Visita uno de los pueblos más encantadores del valle, con calles cálidas, arquitectura colonial y una rica tradición.',
          imagen:
            'assets/images/cuilapam.jpeg',
        },
        {
          nombre: 'Fin del recorrido',
          descripcion:
            'El tour concluye aproximadamente a las 5:00 pm. Te dejamos directo en tu hotel, o si prefieres seguir disfrutando el centro histórico de Oaxaca por tu cuenta, te dejamos ahí mismo.',
          imagen:
            'assets/images/cuilapam.jpeg',
        },
      ],
      galeria: [
        'assets/images/monte-alban-1.jpeg',
        'assets/images/alebrijes.jpeg',
        'assets/images/barro-negro.jpeg',
        'assets/images/mezcal.jpeg',
        'assets/images/mezcal-proceso.jpeg',
        'assets/images/barro-negro-1.jpeg',
      ],
    },
    {
      slug: 'tour-privado',
      nombre: 'Tour Personalizado',
      fecha: 'Salida todos los días',
      descripcionCorta:
        'Diseña tu propio recorrido por Oaxaca: tú eliges los destinos, el horario de inicio y de término.',
      descripcionLarga:
        'Si prefieres un recorrido hecho a tu medida, este tour es para ti. Juntos armamos el itinerario según tus intereses — artesanías, gastronomía, arqueología, naturaleza o una mezcla de todo — y tú decides a qué hora empezar y a qué hora terminar. Ideal para familias, grupos pequeños o quienes quieren explorar Oaxaca a su propio ritmo, sin itinerario fijo.',
      imagenPortada: 'assets/images/macedonio-alcala-portada.jpeg',
      esCotizable: true,
      horarioSalida: 'Sujeto al numero de pasajeros',
      puntoEncuentro: 'Tu hotel o el punto que prefieras dentro de Oaxaca',
      incluye: [
        'Transporte privado durante todo el recorrido',
        'Guía durante todo el tour',
        'Itinerario armado a tu medida',
      ],
      noIncluye: [
        'Entradas a sitios y museos',
        'Alimentos y bebidas',
        'Propinas',
      ],
      paradas: [],
      galeria: [
        'assets/images/privado-1.jpeg',
        'assets/images/privado-2.jpeg',
        'assets/images/privado-3.jpeg',
        'assets/images/privado-4.jpeg',
        'assets/images/privado-5.jpeg',
        'assets/images/privado-6.jpeg',
      ],
    },
    {
      slug: 'traslado-aeropuerto',
      nombre: 'Servicio Traslado al Aeropuerto',
      fecha: 'Todos los días',
      descripcionCorta:
        'Transporte directo y puntual entre tu hotel y el Aeropuerto Internacional de Oaxaca.',
      descripcionLarga:
        'Olvídate de buscar taxi o checar horarios de transporte público al llegar o salir de Oaxaca. Te recogemos directo en tu hotel y te llevamos al aeropuerto (o viceversa), con un chofer puntual y un vehículo cómodo, ajustado al horario de tu vuelo.',
      imagenPortada: 'assets/images/aeropuerto-portada.jpeg',
      esCotizable: true,
      horarioSalida: 'Sujeto al numero de pasajeros',
      puntoEncuentro: 'Tu hotel o domicilio en Oaxaca / Aeropuerto Internacional de Oaxaca',
      incluye: [
        'Transporte directo, punto a punto',
        'Chofer puntual, coordinado con tu horario de vuelo',
      ],
      noIncluye: [
        'Propinas',
      ],
      paradas: [],
      galeria: [
        
      ],
    },
  ];

  getTours(): Tour[] {
    return this.tours;
  }

  getTourPorSlug(slug: string): Tour | undefined {
    return this.tours.find((tour) => tour.slug === slug);
  }
}
