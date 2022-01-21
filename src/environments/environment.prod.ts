export const environment = {
  production: true
};


// Leia o environment.ts

export const SpotifyConfiguration = {
  clientId: '950771d7235245ddba6528de71d1a1d7',
  aulaEndPoint: 'https://accounts.spotify.com/authorize',
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
};
