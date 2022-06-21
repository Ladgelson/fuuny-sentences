import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-funny-sentence',
  templateUrl: './funny-sentence.component.html',
  styleUrls: ['./funny-sentence.component.css']
})
export class FunnySentenceComponent implements OnInit {
  @Output() sentenceDeleted = new EventEmitter<string>();
  @Input() sentence: string;

  constructor() {
    this.sentence = '';
  }

  ngOnInit(): void {
  }

  onDeleteSentence(sentence: string) {
    this.sentenceDeleted.emit(sentence);
  }

}
