import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuggestionService } from '../../../Core/Services/suggestion.service';
import { Suggestion } from '../../../shared/models/suggestion.model';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.scss']
})
export class SuggestionListComponent implements OnInit {
  suggestionList: Suggestion[] = [];

  constructor(private service: SuggestionService, private router: Router) {}

  ngOnInit(): void {
    this.loadSuggestions();
  }

  loadSuggestions(): void {
    this.service.getSuggestionsList().subscribe((data) => {
      this.suggestionList = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/suggestions', id]);
  }

  deleteSuggestion(id: number): void {
    this.service.deleteSuggestion(id).subscribe(() => {
      this.loadSuggestions();
    });
  }

  likesSuggestion(suggestion: Suggestion): void {
    const newLikes = (suggestion.nbLikes || 0) + 1;
    this.service.updateLikes(suggestion.id!, newLikes).subscribe(() => {
      this.loadSuggestions();
    });
  }
}
