import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../../Core/Services/suggestion.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.scss']
})
export class AddSuggestionComponent implements OnInit {
  suggestionForm!: FormGroup;
  id: number | null = null;
  isEditMode = false;

  categories = ['Amélioration', 'Bug', 'Fonctionnalité', 'Autre'];

  constructor(
    private fb: FormBuilder,
    private service: SuggestionService,
    private router: Router,
    private actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      status: ['en attente'],
      nbLikes: [0]
    });

    const paramId = this.actR.snapshot.params['id'];
    if (paramId) {
      this.id = +paramId;
      this.isEditMode = true;
      this.service.getSuggestionById(this.id).subscribe((data) => {
        this.suggestionForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.suggestionForm.invalid) return;

    if (this.isEditMode && this.id) {
      this.service.updateSuggestion(this.id, this.suggestionForm.value).subscribe(() => {
        this.router.navigate(['/suggestions']);
      });
    } else {
      this.service.addSuggestion(this.suggestionForm.value).subscribe(() => {
        this.router.navigate(['/suggestions']);
      });
    }
  }
}
