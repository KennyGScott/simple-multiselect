import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})

export class SimpleDropdownComponent {
  @Input() data: Array<object>;
  @Input() filterOptions: Array<any>;
  @Input() filterBy: string;
  @Input() titleKey: string;

  @Output() selected = new EventEmitter();

  private outputArray: Array<any>;
  constructor() {
    this.outputArray = [];
  }

  clickHandler(item, event) {
    const checked = event.target.checked;
    const output = this.outputArray;
    const index = output.indexOf(item);
    if (checked === true) {
      output.push(item);
    } else {
      if (index !== -1) {
        output.splice(index, 1);
      }
    }
    this.selected.emit(output);
  }

}
