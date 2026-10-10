import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ToursListPage } from './pages/tours-list/tours-list';
import { TourDetailPage } from './pages/tour-detail/tour-detail';
import { NosotrosPage } from './pages/nosotros/nosotros';
import { ContactoPage } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'tours', component: ToursListPage },
  { path: 'tours/:slug', component: TourDetailPage },
  { path: 'nosotros', component: NosotrosPage },
  { path: 'contacto', component: ContactoPage },
];
