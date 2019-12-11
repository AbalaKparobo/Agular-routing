import { Routes } from '@angular/router';
import { HomeRoutes } from './components/home/home.router';
import { IndexRoutes } from './index/index.router';
import { NotFoundRoute } from './pages/not-found/not-found-router';

export const routes: Routes = [...HomeRoutes, ...IndexRoutes, ...NotFoundRoute];