import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router' //ii
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-name-input-page',
  templateUrl: './name-input-page.component.html',
  styleUrls: ['./name-input-page.component.css']
})
export class NameInputPageComponent {
  token: string = '';

  ngOnInit() {
    this.token = this.spotifySrv.getToken();

    if (this.token === '' || !this.token) {
      this.router.navigate(['/error']);
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spotifySrv: SpotifyService,
  ) { }

  firstname= '';
  submitButtonAppear = false;

  onSubmit() {
    // this.nameService.setFirstName(this.firstname);
    this.router.navigate(['/name-friend-input'],
      { queryParams:
        { token: this.token,
          firstname: this.firstname }
      });
  }

  change(event: any) {
    if (this.firstname != '') {
      this.submitButtonAppear = true;
    }
    if (this.firstname == '') {
      this.submitButtonAppear = false;
    }
  }
}
