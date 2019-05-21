import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ISimpleMultiselectFilterSettings {
  options?: Array<any>, // array of objects to choose from
  label?: string,       // label for dropdown
  filterTitle?: string,
  filterBy?: string,    // string name of key to filter by, passed from filter options
  filterKey?: string    // string name of key from filterOptions input to filter
}

@Component({
  selector: 'simple-multiselect',
  templateUrl: './simple-multiselect.component.html',
  styleUrls: ['./simple-multiselect.component.scss']
})

export class SimpleMultiselectComponent implements OnInit {
  @Input() data: Array<object>
  @Input() titleKey: string
  @Input() filterSettings: ISimpleMultiselectFilterSettings
  @Output() selected = new EventEmitter()

  public options
  public checkAll = false
  public selectedFilter: any = 'all'
  private filteredOptions

  ngOnInit() {
    this.initOptions()
  }

  /**
   * @method initOptions handles initialization of selectable options
   * @param selected optional - manually overrides current value of item.selected
   */
  initOptions(selected: boolean = false, filtered = false) {
    const defaultData = this.data.slice()
    const options = (filtered) ? this.filteredOptions : defaultData
    this.options = options
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
    this.returnData()
  }

  /**
   * @method handleAll handles the select all and deselct all
   * @param selectOverride 'all': selects all items, 'none': deselects all items, undefined defaults to value of this.checkAll
   */
  handleAll(event) {
    this.checkAll = event.target.checked
    this.initOptions(this.checkAll)
    this.returnData()
  }

  /**
   * @method handleFilter handle the filtering of options
   */
  handleFilter() {
    this.checkAll = false
    this.initOptions()
    if (this.selectedFilter !== 'all') {
      this.filteredOptions = this.options.filter((option) => option[this.filterSettings.filterKey] == this.selectedFilter)
      this.initOptions(false, true)
    }
    this.returnData()
  }

  /**
   * @method returnData emits the selected event and sends selected options to component's parent
   */
  returnData() {
    const selectedOptions = this.options.filter((opt) => opt.selected == true)
    this.selected.emit(selectedOptions)
  }
}
