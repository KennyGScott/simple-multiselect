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

  private selectedOptions: Array<object>
  private outputArray: Array<object>
  public isChecked = false
  public options: Array<object>

  constructor() {
    this.type = (this.type) ? this.type : 'checkbox'
    this.outputArray = []
  }

  ngOnInit() {
    this.initOptions()
  }

  initOptions() {
    this.options = this.data.slice()

    for (let i = this.options.length; i--;)
      this.options[i]['selected'] = false

    this.selectedOptions = []
  }

  checkHandler(item) {
    const output = this.outputArray
    const index = output.indexOf(item)
    const selected = !item.selected

    item.selected = selected

    if (selected)
      output.push(item)
    else
      if (index != -1)
        output.splice(index, 1)

    this.selectedOptions = output
    this.returnData()
  }

  returnData() {
    this.selected.emit(this.selectedOptions)
  }
}
