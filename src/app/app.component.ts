import { Component } from '@angular/core';

import { ISimpleMultiselectFilterSettings } from './simple-multiselect/simple-multiselect.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public zoneTypes = [
    { id: 1, name: 'Green', has_cups: 1 },
    { id: 2, name: 'Field', has_cups: 0 },
    { id: 3, name: 'Fairway', has_cups: 0 },
  ];

  public Course = {
    zones: [
      { id: 32, golf_course_id: 117, name: '01 Green', zone_id: 1, zone_type: 'Green' },
      { id: 79, golf_course_id: 117, name: '02 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 91, golf_course_id: 117, name: '03 Green', zone_id: 2, zone_type: 'Field' },
      { id: 49, golf_course_id: 117, name: '04 Green', zone_id: 1, zone_type: 'Green' },
      { id: 70, golf_course_id: 999, name: '05 Green', zone_id: 2, zone_type: 'Field' },
      { id: 59, golf_course_id: 117, name: '06 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 54, golf_course_id: 999, name: '07 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 18, golf_course_id: 117, name: '08 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 31, golf_course_id: 117, name: '09 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 79, golf_course_id: 117, name: '10 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 86, golf_course_id: 999, name: '11 Green', zone_id: 2, zone_type: 'Field' },
      { id: 32, golf_course_id: 117, name: '12 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 68, golf_course_id: 999, name: '13 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 63, golf_course_id: 117, name: '14 Green', zone_id: 3, zone_type: 'Fairway' },
      { id: 70, golf_course_id: 117, name: '15 Green', zone_id: 2, zone_type: 'Field' },
      { id: 99, golf_course_id: 117, name: '16 Green', zone_id: 2, zone_type: 'Field' },
      { id: 55, golf_course_id: 117, name: '17 Green', zone_id: 1, zone_type: 'Green' },
      { id: 52, golf_course_id: 117, name: '18 Green', zone_id: 3, zone_type: 'Fairway' }
    ]
  };

  constructor() {
  }


  get filterSettings() {
    const settings: ISimpleMultiselectFilterSettings = {
      options: this.zoneTypes,
      label: 'name',
      filterTitle: 'Filter by Zone',
      filterBy: 'id',
      filterKey: 'zone_id',
    }
    return settings;
  }

  log(event) {
    console.log(event);
  }
}




