// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

// * * * ============================================ * * *
// Configurações do Spotify For Developers
// Base feita pelo Cristian William
//
// * * * Eu iria utilizar a API do Deezer -> https://api.deezer.com/search?q= <-
// * * * por ser mais fácil de fazer a requisição da música, então encontrei um
// * * * breve tutorial de como requisitar a musica através do Token Gerado pela
// * * * API do Spotify, então decidi trocar (novamente :v) a API utilizada no
// * * * projeto.
//
// * * * EDIT: 03
// * * * "Agora vai"
// * * * ============================================ * * *

export const SpotifyConfiguration = {
  clientId: '950771d7235245ddba6528de71d1a1d7',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", // ✔️ Musica Tocando
    "user-read-recently-played",   // ✔️ Ler as músicas já tocadas recentemente
    "user-read-playback-state",    // ✔️ Ler o estado do player de usuário
    "user-top-read",               // ❌ Top Artistas e musicas de usuário
    "user-modify-playback-state",  // ✔️ Alterar o player do usuário (pause/play)
    "user-library-read",           // ❌ Biblioteca do Usuário
    "playlist-read-private",       // ❌ Playlists Privadas
    "playlist-read-collaborative"  // ❌ Playlists colaborativas

    // OBS: As que estiverem com o emoji de ✔️ significa que estão sendo utilizadas agora
    // e os ❌ são os que não estão sendo utilizados (muito provavel que eu utilize futuramente...)
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
