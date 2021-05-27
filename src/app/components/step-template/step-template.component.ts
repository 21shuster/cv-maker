import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step.model';
import * as moment from 'moment';
import { Person } from 'src/app/models/person.model';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class StepTemplateComponent implements OnInit {

  @Input() step!: StepModel
  person: Person = new Person()
  biography: string = ''
  job: string = ''
  name: string = 'Saul'
  lastName: string = 'Goodman'
  phone: string = '645322344'
  languages: string[] = []
  dateStart: string = ''
  dateEnd: string = ''
  values = [{ date: '', job: 'Lawyer', description: '' }]

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.person = this.stepsService.getPerson()
  }

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
    this.person.languages = this.languages
    this.stepsService.setPerson(this.person)
    this.step.isComplete = this.languages.length == 0 ? false : true
  }

  onCompleteStep3() {
    if(this.person.name != "" && this.person.name != "") {
      this.person.name = this.name
      this.person.surname = this.lastName
      this.person.phone = this.phone
      this.stepsService.setPerson(this.person)
      this.step.isComplete = true
    }
  }

  onCompleteStep4() {
    this.step.isComplete = true
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


