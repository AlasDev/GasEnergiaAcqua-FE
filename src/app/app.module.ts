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
import {AddressComponent} from './components/address/address.component';
import {ReadingComponent} from './components/reading/reading.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {UtilityMeterComponent} from './components/utility-meter/utility-meter.component';
import {UtilityMeterAccordionComponent} from './components/utility-meter-accordion/utility-meter-accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    UserComponent,
    UtilityMeterComponent,
    UtilityMeterAccordionComponent,
    AddressComponent,
    ReadingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule {}

