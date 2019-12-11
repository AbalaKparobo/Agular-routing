import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const HomeRoutes: Route[] = [
    {
        path: "",
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            {path: "", component: DashboardComponent},
            {path: "products", component: ProductsComponent},
            {path: "settings", component: SettingsComponent}
        ] 
    }
]