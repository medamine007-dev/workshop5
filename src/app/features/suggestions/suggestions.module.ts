import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';

@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionListComponent,
    SuggestionDetailsComponent,
    AddSuggestionComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, SuggestionsRoutingModule]
})
export class SuggestionsModule {}
