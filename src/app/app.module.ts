import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './portfolio/about/about.component';
import { MainComponent } from './task-manager/main/main.component';
import { FormComponent } from './task-manager/form/form.component';
import { BodyComponent } from './task-manager/body/body.component';
import { DialogComponent } from './task-manager/dialog/dialog.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    MainComponent,
    FormComponent,
    BodyComponent,
    DialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    { provide: MatDialogRef }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
