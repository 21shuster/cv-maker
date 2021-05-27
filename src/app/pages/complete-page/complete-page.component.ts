import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import { StepsService } from '../../services/steps.service';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-complete-page',
  templateUrl: './complete-page.component.html',
  styleUrls: ['./complete-page.component.scss']
})
export class CompletePageComponent implements OnInit {

  person: Person = new Person()

  constructor(
    private stepsService: StepsService,
    private service: CvService) { }

  ngOnInit(): void {
    this.person = this.stepsService.getPerson()
    this.createCV()
  }

  createCV() {
    console.log(this.person)
    if(this.person != undefined) {
      this.service.saveCV(this.person).subscribe((data) => {
        console.log(data)
      },
        error => {
          console.log("Error:", error);
        }
      );
    }
  }

}
