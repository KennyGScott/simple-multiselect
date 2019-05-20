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
  @Input() filterSettings: ISimpleMultiselectFilterSettings;
  @Output() selected = new EventEmitter()

  public options;
  public checkAll = false;
  public selectedFilter: any = 'all';

  constructor() { }

  ngOnInit() {
    this.initOptions()
  }
  handleFilter(option) {
    const selectedFilter = this.selectedFilter
    if (selectedFilter == true) return true
    return selectedFilter == option[this.filterSettings.filterKey]
  }
  /**
   * @method initOptions handles initialization of selectable options
   * @param selected optional - manually overrides current value of item.selected
   */
  initOptions(selected: boolean = false, filtered: boolean = false) {
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
    let selectedOptions = [];
    selectedOptions = this.options.filter((opt) => opt.selected == true)
    this.selected.emit(selectedOptions)
  }
}
