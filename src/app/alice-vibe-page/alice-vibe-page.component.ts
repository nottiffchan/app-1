import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NameService } from '../services/name.service';
import { Track } from '../track.model';

@Component({
  selector: 'app-alice-vibe-page',
  templateUrl: './alice-vibe-page.component.html',
  styleUrls: ['./alice-vibe-page.component.css']
})
export class AliceVibePageComponent {
  faSearch = faSearch;

  firstname: string | undefined;

  aliceTracks: Track[] = [
    new Track("Ivy", "Frank Ocean", '../../assets/images/alice/ivy.jpg'),

  ];

  constructor(private router: Router, private nameService: NameService) {
    this.nameService.getFirstName().subscribe(data => {
      this.firstname = data;
      console.log(this.firstname + " alice");
    });
  }

  onContinue() {
    this.router.navigate(['/bob-vibe']);
  }
}
