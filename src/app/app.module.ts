import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user.component';
import {LineChartComponent} from './components/line-chart/line-chart.component';
import {AddressComponent} from './components/address/address.component';
import {ReadingComponent} from './components/reading/reading.component';
import {CdkAccordion, CdkAccordionItem} from '@angular/cdk/accordion';
import {HomePageComponent} from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    UserComponent,
    AddressComponent,
    ReadingComponent,

    LineChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule {}

