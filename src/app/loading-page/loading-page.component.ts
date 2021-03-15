import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  token: any;
  firstname: any;
  secondname: any;
  aliceFirstSong: any;
  aliceSecondSong: any;
  bobFirstSong: any;
  bobSecondSong: any;

  currUser: any;

  testTracks: Array<any> = [];
  playlistId:any;
  playlistName:any;
  playlistUrl:any;
  imgUrl: any;
  uris:Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spotifySrv: SpotifyService
  ) { }

  ngOnInit(): void {
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
    this.createPlaylist();
  }


  createPlaylist() {
    this.spotifySrv.getCurrUser(this.token).subscribe((res:any) => {
      this.currUser = res;

      let playlistName = `vibing with ${this.firstname} and ${this.secondname}`;
      this.spotifySrv.createPlaylist(playlistName, this.token, this.currUser.href).subscribe((res:any) => {
        this.playlistId = res.id;

        this.getTracks();
      })
    })
  }

  getTracks() {
    this.spotifySrv.getRecommendedTracks(this.token, this.aliceFirstSong, this.aliceSecondSong, this.bobFirstSong, this.bobSecondSong).subscribe((res:any) => {
      this.testTracks = res.tracks;

      for (let i = 0; i < this.testTracks.length; i++) {
        this.uris[i] = this.testTracks[i].uri;
      }
      this.addTracksToPlaylist();
    });
  }

  addTracksToPlaylist() {
    this.spotifySrv.addToPlaylist(this.playlistId, this.token, this.uris).subscribe(
      res => {
        setTimeout(() => {
          this.router.navigate(['./result'],
            { queryParams: { playlistId: this.playlistId, token: this.token }}
          )
        }, 2000)
      }
    )
  }
}
