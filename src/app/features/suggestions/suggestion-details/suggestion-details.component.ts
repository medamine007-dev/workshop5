import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../../Core/Services/suggestion.service';
import { Suggestion } from '../../../shared/models/suggestion.model';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.scss']
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | null = null;

  constructor(
    private actR: ActivatedRoute,
    private service: SuggestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.actR.snapshot.params['id'];
    this.service.getSuggestionById(id).subscribe((data) => {
      this.suggestion = data;
    });
  }

  deleteSuggestion(): void {
    if (this.suggestion?.id) {
      this.service.deleteSuggestion(this.suggestion.id).subscribe(() => {
        this.router.navigate(['/suggestions']);
      });
    }
  }

  goToEdit(): void {
    if (this.suggestion?.id) {
      this.router.navigate(['/suggestions/edit', this.suggestion.id]);
    }
  }
}
