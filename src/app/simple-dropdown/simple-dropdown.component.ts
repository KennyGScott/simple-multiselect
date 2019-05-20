import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})

export class SimpleDropdownComponent implements OnInit {
  @Input() data: Array<object>
  @Input() titleKey: string
  @Input() type: string
  @Output() selected = new EventEmitter()

  public options;
  public checkAll = false;

  constructor() {
    this.type = (this.type) ? this.type : 'checkbox'
  }

  ngOnInit() {
    this.initOptions()
  }

  initOptions(selected: boolean = false) {
    this.options = this.data.slice()
    for (let i = this.options.length; i--;)
      this.options[i]['selected'] = selected
  }

  checkHandler(item) {
    const selected = !item.selected
    item.selected = selected
    this.returnData();
  }

  handleAll() {
    this.checkAll = !this.checkAll
    this.initOptions(this.checkAll)
    this.returnData();
  }

  returnData() {
    const selectedOptions = this.options.filter((opt) => opt.selected == true)
    this.selected.emit(selectedOptions)
  }
}
