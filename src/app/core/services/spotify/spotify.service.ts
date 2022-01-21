import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  urlLogin(){ // Obter o login do usuário e gerar o token para utilização no Spotify Clone (string)

    const authEndPoint = `${SpotifyConfiguration.authEndPoint}?`; // URL da Autorização
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`; // ID do Cliente
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`; // Pega a URL do LocalHost
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('20%')}&`; // Regrinhas dos eventos
    const responseType = `response_type=token&show_dialog=true`; // Retorna o evento da autorização concluida
    return authEndPoint + clientId + redirectUrl + scopes + responseType;

    // Base: Cristian William
  }

  // * * * Service em construção * * * \\
  // Feito pelo Lucas daqui...

  tokenUrlCallBack(){
    console.log(window.location.hash)
    if(!window.location.hash)
    return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  requestAcessToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    }

    async playMusic(){ // Play na música
      await this.spotifyApi.skipToPrevious();
    }

    async pauseMusic() { // Pausa a música
      await this.spotifyApi.pause();
    }

    async backMusic(){ // Volta para a música anterior
      await this.spotifyApi.skipToPrevious();
    }

    async nextMusic() { // Avança para a próxima musica
      await this.spotifyApi.skipToNext();
    }

    // Até aqui...

}
