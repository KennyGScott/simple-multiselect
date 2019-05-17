import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})

export class SimpleDropdownComponent implements OnInit {
  @Input() data: Array<object>;
  @Input() filterOptions: Array<object>;
  @Input() filterBy: string;
  @Input() filterKey: string;
  @Input() titleKey: string;
  @Input() type: string;

  @Output() selected = new EventEmitter();

  private outputArray: Array<object>;
  public options: Array<object>;

  constructor() {
    this.outputArray = [];
    this.type = (this.type) ? this.type : 'checkbox';
  }

  ngOnInit() {
    this.initOptions();
  }

  initOptions() {
    this.options = this.data;
  }

  filterEventHandler(event) {
    this.initOptions();
    const filterVal = event.target.value;
    const filteredOptions = this.options.filter((option) => {
      return option[this.filterBy] == filterVal;
    });
    this.options = filteredOptions;
    this.returnData();
  }

  clickHandler(item, event) {
    const output = this.outputArray;
    const index = output.indexOf(item);

    if (this.type === 'checkbox') {
      const checked = event.target.checked;
      if (checked === true) {
        output.push(item);
      }
      else {
        if (index !== -1) {
          output.splice(index, 1);
        }
      }
    }
    this.options = output;
    this.returnData();
  }
  returnData() {
    this.selected.emit(this.options);
  }
}
