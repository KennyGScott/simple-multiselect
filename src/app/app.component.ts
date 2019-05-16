import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public val;
  public Course = {
    zones: [
      { id: 32, golf_course_id: 117, name: '01 Green' },
      { id: 79, golf_course_id: 117, name: '02 Green' },
      { id: 91, golf_course_id: 117, name: '03 Green' },
      { id: 49, golf_course_id: 117, name: '04 Green' },
      { id: 70, golf_course_id: 117, name: '05 Green' },
      { id: 59, golf_course_id: 117, name: '06 Green' },
      { id: 54, golf_course_id: 117, name: '07 Green' },
      { id: 18, golf_course_id: 117, name: '08 Green' },
      { id: 31, golf_course_id: 117, name: '09 Green' },
      { id: 79, golf_course_id: 117, name: '10 Green' },
      { id: 86, golf_course_id: 117, name: '11 Green' },
      { id: 32, golf_course_id: 117, name: '12 Green' },
      { id: 68, golf_course_id: 117, name: '13 Green' },
      { id: 63, golf_course_id: 117, name: '14 Green' },
      { id: 70, golf_course_id: 117, name: '15 Green' },
      { id: 99, golf_course_id: 117, name: '16 Green' },
      { id: 55, golf_course_id: 117, name: '17 Green' },
      { id: 52, golf_course_id: 117, name: '18 Green' }
    ]
  };
  log(event) {
    console.log(event)
  }
}




