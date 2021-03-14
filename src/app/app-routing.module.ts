import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AliceVibePageComponent } from './vibe-page/alice-vibe-page/alice-vibe-page.component';

import { LandingComponent } from './landing/landing.component';
import { BobVibePageComponent } from './vibe-page/bob-vibe-page/bob-vibe-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { NameFriendInputPageComponent } from './input-page/name-friend-input-page/name-friend-input-page.component';
import { NameInputPageComponent } from './input-page/name-input-page/name-input-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SelectedVibesPageComponent } from './selected-vibes-page/selected-vibes-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'name-input', component: NameInputPageComponent },
  { path: 'name-friend-input', component: NameFriendInputPageComponent },
  { path: 'alice-vibe', component: AliceVibePageComponent },
  { path: 'bob-vibe', component: BobVibePageComponent },
  { path: 'selected-vibes', component: SelectedVibesPageComponent },
  { path: 'result', component: ResultPageComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
