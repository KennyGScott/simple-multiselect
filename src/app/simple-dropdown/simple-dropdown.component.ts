import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})

export class SimpleDropdownComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() titleKey: string;
  @Output() selected = new EventEmitter();

  private outputArray: Array<any>;
  constructor() {
    this.outputArray = [];
  }

  clickHandler(item, event) {
    const index = this.outputArray.indexOf(item);
    if (event.target.checked === true) {
      this.outputArray.push(item);
    } else {
      if (index !== -1) {
        this.outputArray.splice(index, 1);
      }
    }
    this.selected.emit(this.outputArray);
  }

  ngOnInit() {
  }

}
