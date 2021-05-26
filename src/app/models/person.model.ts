import { Login } from "./login.model";

export class Person {
  languages?: string[];
  experience?: string[];
  education?: string[];
  biography?: string;
  phone?: string;
  name?:      string;
  surname?:   string;
  picture?:     string;
  birthday?: string;
  job?:       string;
  user?:     Login; 
}
