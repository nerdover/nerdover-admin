import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Identifiable } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly http = inject(HttpClient);

  public getCategories() {
    return this.http.get<Identifiable[]>('/api/Categories');
  }
}
