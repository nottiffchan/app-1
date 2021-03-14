import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-bob-vibe-page',
  templateUrl: './bob-vibe-page.component.html',
  styleUrls: ['../alice-vibe-page/alice-vibe-page.component.css']
})
export class BobVibePageComponent implements OnInit {
  faSearch = faSearch;
  token: any;
  firstname: any;
  secondname: any;

  aliceFirstSong: any;
  aliceSecondSong: any;

  trackNameSearched: string = '';
  searchResults: Array<any> = [];
  selectedTracks: Array<any> = [ {
    trackId: '',
    trackName: '',
    artistName: '',
    img: '',
  }, {
    trackId: '',
    trackName: '',
    artistName: '',
    img: '',
  }];

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
      this.aliceSecondSong = params['aliceSecondSong']
    });

    if (this.token === '' || !this.token) {
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigate(['./selected-vibes'], {
      queryParams: {
        token: this.token,
        firstname: this.firstname,
        secondname: this.secondname,
        aliceFirstSong: this.aliceFirstSong,
        aliceSecondSong: this.aliceSecondSong,
        bobFirstSong: this.selectedTracks[0].trackId,
        bobSecondSong: this.selectedTracks[1].trackId
      }
    });
  }

  change(event: any) {
    if (this.trackNameSearched !== '') {
      this.getTracks();
    }
  }

  getTracks() {
    this.spotifySrv.searchMusic(this.trackNameSearched, 'track,artist', this.token).subscribe(res => {
      this.searchResults = res.tracks.items;
      // console.log(this.searchResults)
    })
  }

  selectTrack(track: any) {
    if (this.selectedTracks[0].trackId === '') {
      this.selectedTracks[0].trackId = track.id;
      this.selectedTracks[0].trackName = track.name;
      this.selectedTracks[0].artistName = track.artists[0].name;
      this.selectedTracks[0].img = track.album.images[1].url;
    } else if (this.selectedTracks[1].trackId === '') {
      this.selectedTracks[1].trackId = track.id;
      this.selectedTracks[1].trackName = track.name;
      this.selectedTracks[1].artistName = track.artists[0].name;
      this.selectedTracks[1].img = track.album.images[1].url;
    }

    this.trackNameSearched = '';
  }

  removeSelected(index: number) {
    this.selectedTracks[index].trackId = '';
    this.selectedTracks[index].trackName = '';
    this.selectedTracks[index].artistName = '';
    this.selectedTracks[index].img = '';
  }
}
