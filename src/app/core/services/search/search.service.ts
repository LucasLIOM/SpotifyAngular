import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from '../../model/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchMus = new Subject<Search>();
  private baseUrl = `${environment.baseUrl}/search`;

  constructor(private http: HttpClient) {}

  getMusic(name: string) {

    try{

    const musicFind = (`${this.baseUrl}` + `${"message"}`);
    //return this.http.get<Search>(`${this.baseUrl}` + `${"message"}`);

    }catch (console) { // Try caso usuário não digite o nome da música

      console.log(`→ Obtive erros no comando Dezzer → - Você pode ignorar.`, 'gold')

    {
   }
  }
 }
}
