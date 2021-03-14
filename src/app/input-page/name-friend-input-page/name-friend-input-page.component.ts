import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-name-friend-input-page',
  templateUrl: './name-friend-input-page.component.html',
  styleUrls: ['../name-input-page/name-input-page.component.css']
})
export class NameFriendInputPageComponent {
  token:any;
  firstname:any;
  secondname= '';
  submitButtonAppear = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'],
      this.firstname = params['firstname']
    });
    if (this.token === '' || !this.token) {
      this.router.navigate(['/error']);
    }
  }

  onSubmit() {
    // this.nameService.setSecondName(this.secondname);
    this.router.navigate(['/alice-vibe'], { queryParams:
      { token: this.token,
        firstname: this.firstname,
        secondname: this.secondname
      }
    });
  }

  change(event: any) {
    if (this.secondname != '') {
      this.submitButtonAppear = true;
    }
    if (this.secondname == '') {
      this.submitButtonAppear = false;
    }
  }
}
