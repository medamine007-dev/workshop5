import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../../shared/models/suggestion.model';

@Injectable({ providedIn: 'root' })
export class SuggestionService {
  suggestionUrl = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) {}

  getSuggestionsList(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.suggestionUrl);
  }

  getSuggestionById(id: number): Observable<Suggestion> {
    return this.http.get<Suggestion>(`${this.suggestionUrl}/${id}`);
  }

  addSuggestion(suggestion: Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.suggestionUrl, suggestion);
  }

  updateSuggestion(id: number, suggestion: Suggestion): Observable<Suggestion> {
    return this.http.put<Suggestion>(`${this.suggestionUrl}/${id}`, suggestion);
  }

  deleteSuggestion(id: number): Observable<any> {
    return this.http.delete(`${this.suggestionUrl}/${id}`);
  }

  updateLikes(id: number, nbLikes: number): Observable<Suggestion> {
    return this.http.patch<Suggestion>(`${this.suggestionUrl}/${id}`, { nbLikes });
  }
}
