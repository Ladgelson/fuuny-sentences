import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-between-components';
  currentSentence = '';
  funnySentences: string[] = [];

  addFunnySentence(){
    this.funnySentences.push(this.currentSentence);
    this.currentSentence = '';
  }

  onSentenceDeleted(deletedSentence: string) {
    this.funnySentences = this.funnySentences.filter(sentence => sentence != deletedSentence);
  }
}
