import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app';
import { HeaderComponent } from '@components/header/header.component';
import { cookieConfiguration } from '@shared/configurations/cookie-consent/cookie-consent.configuration';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfiguration)
  ],
  providers: [
    CookieService,
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
