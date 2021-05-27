import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CvService } from './../../services/cv.service';

@Component({
  selector: "LinkedinLoginResponse",
  templateUrl: "./linkedinLoginResponse.component.html",
  styleUrls: ["./linkedinLoginResponse.component.scss"]
})
export class LinkedinLoginResponse implements OnInit {

  name = "";
  linkedInToken = "";
  smallPicture = "";
  bigPicture = "";
  body = "";
  constructor(private router: Router, private route: ActivatedRoute, private service: CvService) {}

  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
    //const data = await response.json();

    this.service.getProfile().subscribe((data) => {
      console.log(data)
      this.name = data.localizedFirstName + ' ' + data.localizedLastName
      //this.person = data
    },
      error => {
        console.log("Error:", error);
      }
    );

    this.service.getPicture().subscribe((data) => {
      console.log(data)
      this.body = data

      //Accedemos a los datos del perfil
      this.smallPicture = data.profilePicture['displayImage~'].elements[0].identifiers[0].identifier
      this.bigPicture = data.profilePicture['displayImage~'].elements[3].identifiers[0].identifier
      //displayImage.elements[3].identifiers[0].identifier
      //this.picture = data.profilePicture.displayImage.elements
      console.log(this.bigPicture)
    },
      error => {
        console.log("Error:", error)
      }
    );

    /*data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
      });
      console.log('-------------------');
    });*/
  }

}
