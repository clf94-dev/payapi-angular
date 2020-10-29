import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesHomeComponent } from './components/companies-home/companies-home.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesHomeComponent } from './components/features-home/features-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiddleHomeComponent } from './components/middle-home/middle-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { PrincipleAboutComponent } from './components/principle-about/principle-about.component';
import { StatisticsAboutComponent } from './components/statistics-about/statistics-about.component';
import { TopAboutComponent } from './components/top-about/top-about.component';
import { TopContactComponent } from './components/top-contact/top-contact.component';
import { TopHomeComponent } from './components/top-home/top-home.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { appRoutingProviders, routing } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesHomeComponent,
    ContactSectionComponent,
    CtaComponent,
    FeaturesHomeComponent,
    FooterComponent,
    MiddleHomeComponent,
    NavbarComponent,
    PricingSectionComponent,
    PrincipleAboutComponent,
    StatisticsAboutComponent,
    TopAboutComponent,
    TopContactComponent,
    TopHomeComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,routing, 
    FlexLayoutModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
