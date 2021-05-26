import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step.model';
import * as moment from 'moment';
import { Person } from 'src/app/models/person.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepTemplateComponent implements OnInit {

  person: Person = new Person()
  @Input() step!: StepModel
  biography: string = ''
  job: string = ''
  languages: string[] = []
  name: string = 'Saul'
  lastName: string = 'Goodman'
  phone: string = '645322344'
  dateStart: string = ''
  dateEnd: string = ''
  values = [{ date: '', job: 'Lawyer', description: '' }]

  constructor(private service: CvService) { }

  ngOnInit(): void { }

  onCompleteStep1(event: any) {
    switch (event.target.value) {
      case 'Mobile Design': {
        this.step.isComplete = true
        this.job = event.target.value
        break
      }
      case 'Web Design': {
        this.step.isComplete = true
        this.job = event.target.value
        break
      }
      case 'Cybersecurity': {
        this.step.isComplete = true
        this.job = event.target.value
        break
      }
      default: {
        break
      }
    }
  }

  onCompleteStep2(event: any) {
    var value = event.target.value
    if (!this.languages.includes(value)) {
      this.languages.push(value)
    } else {
      this.removeElement(this.languages, value)
    }
    this.step.isComplete = this.languages.length == 0 ? false : true
  }

  onCompleteStep3() {
    if (this.name != "") {
      this.step.isComplete = true
    }
  }

  onCompleteStep4() {
    this.person.languages = this.languages
    this.person.experience = []
    this.person.education = []
    this.person.biography = this.job
    this.person.phone = this.phone
    this.person.name = this.name
    this.person.surname = this.lastName
    this.person.picture = ''
    this.person.birthday = ''
    this.person.job = this.job
    console.log(this.person)
    this.createCV()
    this.step.isComplete = true
  }
  createCV() {
    console.log(this.person)
    this.service.saveCV(this.person).subscribe((data) => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }


  removevalue(i: number) {
    this.values.splice(i, 1)
  }

  addvalue() {
    this.values.push({ date: '', job: '', description: '' });
  }

  startChange(data: any) {
    // convertimos la fecha
    let mDate = moment(data.value).format("DD/MM/YYYY")
    this.dateStart = mDate
    console.log(this.dateStart)
  }

  endChange(data: any) {
    if (data.value != null) {
      // convertimos la fecha
      console.log(data.value)
      let mDate = moment(data.value).format("DD/MM/YYYY")
      this.dateEnd = mDate
    }
  }

  removeElement(array: String[], element: String) {
    array.forEach((value, index) => {
      if (value == element) array.splice(index, 1)
    });
  }
}


