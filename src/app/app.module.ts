import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NameInputPageComponent } from './input-page/name-input-page/name-input-page.component';
import { FormsModule } from '@angular/forms';
import { NameFriendInputPageComponent } from './input-page/name-friend-input-page/name-friend-input-page.component';
import { AliceVibePageComponent } from './vibe-page/alice-vibe-page/alice-vibe-page.component';
import { BobVibePageComponent } from './vibe-page/bob-vibe-page/bob-vibe-page.component';
import { SelectedVibesPageComponent } from './selected-vibes-page/selected-vibes-page.component';
import { SelectedTrackComponent } from './selected-vibes-page/selected-track/selected-track.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoadingPageComponent,
    NameInputPageComponent,
    NameFriendInputPageComponent,
    AliceVibePageComponent,
    BobVibePageComponent,
    SelectedVibesPageComponent,
    SelectedTrackComponent,
    ResultPageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
