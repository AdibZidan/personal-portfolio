import { NgModule } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GoogleAnalyticsService } from '../../services/google-analytics/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

}
