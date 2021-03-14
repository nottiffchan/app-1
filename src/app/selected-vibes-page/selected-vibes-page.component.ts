import { Component, OnInit } from '@angular/core';
import { Track } from '../track.model';
import { ActivatedRoute, Router } from '@angular/router' //ii
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-selected-vibes-page',
  templateUrl: './selected-vibes-page.component.html',
  styleUrls: ['./selected-vibes-page.component.css']
})
export class SelectedVibesPageComponent implements OnInit {
  token = '';
  firstname = '';
  secondname = '';
  aliceFirstSong = '';
  aliceSecondSong = '';
  bobFirstSong = '';
  bobSecondSong = '';

  selectedSongs:Array<string> = [];
  selectedTracks: Array<Track> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spotifySrv: SpotifyService
  ) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'],
      this.firstname = params['firstname'],
      this.secondname = params['secondname'],
      this.aliceFirstSong = params['aliceFirstSong'],
      this.aliceSecondSong = params['aliceSecondSong'],
      this.bobFirstSong = params['bobFirstSong'],
      this.bobSecondSong = params['bobSecondSong']
    });

    if (this.token === ''|| !this.token) {
      this.router.navigate(['/error']);
    }
    this.selectedSongs.push(this.aliceFirstSong);
    this.selectedSongs.push(this.aliceSecondSong);
    this.selectedSongs.push(this.bobFirstSong);
    this.selectedSongs.push(this.bobSecondSong);

    this.getTracks();
  }

  ngOnInit(): void {

  }

  getTracks() {
    for (let i = 0; i < 4; i++) {
      this.spotifySrv.getTrack(this.selectedSongs[i], this.token).subscribe((res:any) => {
        this.selectedTracks[i] = new Track(res.id, res.name, res.artists[0].name, res.album.images[1].url);
      })
    }
  }

  onContinue() {
    this.router.navigate(['./loading'], {
      queryParams: {
        token: this.token,
        firstname: this.firstname,
        secondname: this.secondname,
        aliceFirstSong: this.aliceFirstSong,
        aliceSecondSong: this.aliceSecondSong,
        bobFirstSong: this.bobFirstSong,
        bobSecondSong: this.bobSecondSong
      }
    });
  }

  onSelectAgain() {
    this.router.navigate(['./alice-vibe'], {
      queryParams: {
        token: this.token,
        firstname: this.firstname,
        secondname: this.secondname,
      }
    });
  }

}
