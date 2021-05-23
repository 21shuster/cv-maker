import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step.model';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepTemplateComponent implements OnInit {

  @Input() step!: StepModel;
  languages: String[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCompleteStep1(event: any) {
    switch(event.target.value) {
      case 'Mobile Design': {
        this.step.isComplete = true;
        break;
      }
      case 'Web Design': {
        this.step.isComplete = true;
        break;
      }
      case 'Cybersecurity': {
        this.step.isComplete = true;
        break;
     }
      default: {
        break;
      }
   }
  }

  onCompleteStep2(event: any) {
    var value = event.target.value;
    if(!this.languages.includes(value)){
      this.languages.push(value);
    }else{
      this.removeElement(this.languages, value);
    }
    this.step.isComplete = this.languages.length == 0 ? false : true;
  }

  onCompleteStep3(event: any) {
    this.step.isComplete = true;
  }

  onCompleteStep4() {
    this.step.isComplete = true;
  }

  removeElement(array:String[], element: String) {
    array.forEach((value,index)=>{
        if(value==element) array.splice(index,1);
    });
  }
}


