import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { MediaRetrievalService } from 'src/app/services/media-retrieval.service';

@Component({
  selector: 'app-notespage',
  templateUrl: './notespage.component.html',
  styleUrls: ['./notespage.component.css']
})
export class NotespageComponent implements OnInit {

  constructor(private mediaRetrievalService: MediaRetrievalService) { }

  notes?: Note[];


  ngOnInit(): void {

  }
  // Recieves the tags selected by the user in the search bar and finds notes with those tags
  onSearch(): void {
    this.mediaRetrievalService.getNotesByTag(this.mediaRetrievalService.selectedTags).subscribe(resp => {
      this.notes = resp;
      console.log(resp);
    });
  }

  

}

