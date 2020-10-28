import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule, Route} from '@angular/router'
import { AboutComponent } from './components/pages/about/about.component'
import { ContactComponent } from './components/pages/contact/contact.component'
import { HomeComponent } from './components/pages/home/home.component'
import { PricingComponent } from './components/pages/pricing/pricing.component'



const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'pricing', component:PricingComponent},
    {path: 'contact', component:ContactComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
