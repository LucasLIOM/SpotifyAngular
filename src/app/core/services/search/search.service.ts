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

  getOne(id: number) {
    return this.http.get<Search>(`${this.baseUrl}/${id}`);
  }
}
