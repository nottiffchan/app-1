import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  playlistName: any;
  playlistUrl: any;
  imgUrl: any;
  playlistId: any;
  token: any;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private spotifySrv: SpotifyService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.playlistId = params['playlistId'],
      this.token = params['token']
    });

    if (this.token === ''|| !this.token) {
      this.router.navigate(['/error']);
    }
    this.getPlaylist();
  }

  getPlaylist() {
    this.spotifySrv.getPlaylist(this.playlistId, this.token).subscribe((res:any) => {
      this.playlistName = res.name;
      this.playlistUrl = res.external_urls.spotify;
      this.imgUrl = res.images[1].url;
    })
  }
}
