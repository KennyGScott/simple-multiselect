import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})

export class SimpleDropdownComponent implements OnInit {
  @Input() data: Array<object>
  @Input() titleKey: string
  @Output() selected = new EventEmitter()

  public options;
  public checkAll = false;

  constructor() {}

  ngOnInit() {
    this.initOptions()
  }

  /**
   * @method initOptions handles initialization of dropdown options
   * @param selected optional - manually overrides current value of item.selected
   */
  initOptions(selected: boolean = false) {
    this.options = this.data.slice()
    for (let i = this.options.length; i--;)
      this.options[i]['selected'] = selected
  }

  /**
   * @method checkHandler handles the change event for an option's checkbox
   * @param item current option being selected
   */
  checkHandler(item) {
    const selected = !item.selected
    item.selected = selected
    this.returnData();
  }

  /**
   * @method handleAll handles the select all and deselct all
   */
  handleAll() {
    this.checkAll = !this.checkAll
    this.initOptions(this.checkAll)
    this.returnData();
  }

  /**
   * @method returnData emits the selected event to pass the selected options to this components parent
   */
  returnData() {
    const selectedOptions = this.options.filter((opt) => opt.selected == true)
    this.selected.emit(selectedOptions)
  }
}
