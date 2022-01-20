import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  openPageLogin(){// Abre a página de autorização (Oficial do Spotify)

    console.log(this.spotifyService.urlLogin());
    //window.location.href = this.spotifyService.urlLogin();

    this.spotifyService.urlLogin(); // Resgata o token de autorização do spotify
  }

}
