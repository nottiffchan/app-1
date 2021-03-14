import { Component } from '@angular/core';
import { env } from 'process';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  constructor(
    private spotifySrv: SpotifyService,
  ) { }

  login() {
    this.spotifySrv.authorize();
  }
}
