import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1'
  private client_id = environment.CLIENT_ID;
  // private redirect_uri = 'http://localhost:4200/name-input';
  private redirect_uri = 'https://v-ibing.herokuapp.com/name-input';
  stateKey = 'spotify_auth_state';

  constructor(private http: HttpClient, private router: Router) { }

  generateRandomString(length:number) {
    var text = ''; 
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getHashParams() {
    var hashParams:any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  authorize() {
    var state = this.generateRandomString(16);
    localStorage.setItem(this.stateKey, state);
    var scope = 'user-read-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(this.client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(this.redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location.href = url;
  }

  getToken() {
    var params = this.getHashParams();
    var access_token = params.access_token;
    var state = params.state;
    var storedState = localStorage.getItem(this.stateKey);

    console.log("access token!", access_token)
    console.log("state!", state)
    console.log("stored state!", storedState)

    // if (access_token && (state == null || state !== storedState)) {
    if (access_token && state == null) {
      // alert("There was an error during authentication");
      this.router.navigate(['/error']);
    } else {
      localStorage.removeItem(this.stateKey);
      return access_token;
    }
  }

  getCurrUser(token:string) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/me`, {headers});
  }

  searchMusic(str:string, type:string ,token:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/search?query=${str}&offset=0&limit=10&type=${type}`, {headers});
  }

  getTrack(trackId: string, token:string) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/tracks/${trackId}`, {headers});
  }

  getRecommendedTracks(token:string, track1:string, track2:string, track3:string, track4:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/recommendations?&seed_tracks=${track1},${track2},${track3},${track4}&limit=50`, {headers});
  }

  createPlaylist(name:string, token:string, url:string) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    let description = 'vibe created using v-ibing.herokuapp.com';
    return this.http.post(`${url}/playlists`, {name: name, description: description}, {headers});
  }

  addToPlaylist(playlistId:string, token:string, uris:Array<any>) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/playlists/${playlistId}/tracks`, {uris: uris}, {headers});
  }

  getPlaylist(playlistId:string, token:string) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/playlists/${playlistId}`, {headers});
  }
}
