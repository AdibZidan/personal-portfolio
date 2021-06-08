import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app';
import { HeaderComponent } from '@components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { cookieConfiguration } from '@shared/configurations/cookie-consent/cookie-consent.configuration';
import { META_REDUCERS, REDUCERS } from '@shared/store/helpers/localstorage/localstorage.helper';
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
    NgcCookieConsentModule.forRoot(cookieConfiguration),
    StoreModule.forRoot(REDUCERS, { metaReducers: META_REDUCERS })
  ],
  providers: [
    CookieService,
    {
      provide: MAT_DIALOG_DATA,
      useValue: undefined
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
