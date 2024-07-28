import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogFact, DogFactService } from './dog-fact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {

  dogFacts: DogFact[] = [];
  selectedId: string = '';

  selectedDogFact: DogFact|null = null

  constructor(private dogFactService: DogFactService) { }

  ngOnInit(): void {
  }

  loadDogFacts(): void {
    this.dogFactService.getDogFacts().subscribe(
      (data) => {
        this.dogFacts = data;
      },
      (error) => {
        console.error('Error fetching dog facts', error);
      }
    );
  }

  loadDogFactById(): void {
    if (this.selectedId) {
      console.log(this.selectedId)
      this.selectedId = this.selectedId + ""
      this.dogFactService.getDogFactById(this.selectedId).subscribe(
        (data) => {
          this.selectedDogFact = data;
        },
        (error) => {
          console.error('Error fetching dog fact by ID', error);
        }
      );
    }
  }
}
