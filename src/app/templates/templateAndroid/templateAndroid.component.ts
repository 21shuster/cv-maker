import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StepsService } from '../../services/steps.service';
import { CvService } from './../../services/cv.service';

@Component({
  selector: 'app-templateAndroid',
  templateUrl: './templateAndroid.component.html',
  styleUrls: ['./templateAndroid.component.css'],
})
export class TemplateAndroidComponent implements OnInit {
  person: Person = new Person();
  smallPicture = ''
  bigPicture = ''
  body = ''

  constructor(
    private route: ActivatedRoute,
    private service: CvService,
    private stepService: StepsService
  ) {}

  ngOnInit() {
    this.person = this.stepService.getPerson();
    this.service.getProfile().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log('Error:', error)
      }
    );

    this.service.getPicture().subscribe(
      (data) => {
        this.body = data
        //Accedemos a los datos del perfil
        this.smallPicture =
          data.profilePicture[
            'displayImage~'
          ].elements[0].identifiers[0].identifier
        this.bigPicture =
          data.profilePicture[
            'displayImage~'
          ].elements[3].identifiers[0].identifier
          this.person.picture = this.bigPicture
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
