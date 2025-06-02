import {Component, OnInit} from '@angular/core';
import {ReadingService} from '../../services/reading.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  standalone: false,
  styleUrl: './reading.component.css'
})
export class ReadingComponent implements OnInit {
  constructor(private readingService: ReadingService) { }

  ngOnInit(): void {
    console.log("reading initialized");
  }
}
