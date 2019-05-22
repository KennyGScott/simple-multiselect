import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ISimpleMultiselectFilterSettings {
  options?: Array<any>, // array of objects to choose from
  label?: string,       // label for dropdown
  filterTitle?: string, // title for heading above the filter
  filterBy?: string,    // string name of key to filter by, passed from filter options
  filterKey?: string    // string name of key from options input to filter
}

export interface ISimpleMultiSelectTranslations {
  searchPlaceholder?: string, // placeholder text for search box
  selectAll?: string,         // select all label
  deselectAll?: string,       // deselect all label
  showAll?: string,           // show all filter label
  noResults?: string          // text displayed when no options are found when searching or filtering
}

@Component({
  selector: 'simple-multiselect',
  templateUrl: './simple-multiselect.component.html',
  styleUrls: ['./simple-multiselect.component.scss']
})

export class SimpleMultiselectComponent implements OnInit {
  @Input() data: Array<object>
  @Input() titleKey: string
  @Input() showSearch = false
  @Input() filterSettings: ISimpleMultiselectFilterSettings
  @Input() translationSettings: ISimpleMultiSelectTranslations
  @Output() selected = new EventEmitter()

  public options
  public checkAll = false
  public selectedFilter: any = 'all'
  public searchText = ''
  public translations: ISimpleMultiSelectTranslations
  private filteredOptions
  private isFiltered = false

  ngOnInit() {
    this.setTranslations()
    this.initOptions()
  }

  get defaultTranslations() {
    const defaults: ISimpleMultiSelectTranslations = {
      searchPlaceholder: 'Search...',
      selectAll: 'Select All',
      deselectAll: 'Deselect All',
      showAll: 'Show All',
      noResults: 'No results to display'
    }
    return defaults
  }

  /**
   * @method isDisplayed handles display logic for options
   * @param option the current option object
   */
  isDisplayed(option) {
    if (!!this.filterSettings)
      return this.selectedFilter == option[this.filterSettings.filterKey] || this.selectedFilter == 'all'
    else
      return true
  }

  /**
   * @method setTranslations sets the user supplied or default translation values
   */
  setTranslations() {
    if (!this.translationSettings)
      this.translations = this.defaultTranslations
    else
      this.translations = this.translationSettings
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
   * @method handleSelectAll handles the select all and deselect all functionality
   * @param selectOverride 'all': selects all items, 'none': deselects all items, undefined defaults to value of this.checkAll
   */
  handleSelectAll(state) {
    this.checkAll = state
    this.initOptions(this.checkAll, this.isFiltered)
    this.returnData()
  }

  /**
   * @method handleSearch handles the filtering of options via user search
   */
  handleSearch() {
    this.initOptions()
    if (this.searchText == '') return
    this.options = this.options.filter(option => option[this.titleKey].toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
  }

  /**
   * @method handleFilter handle the filtering of options via predefined list
   */
  handleFilter() {
    this.checkAll = false
    this.initOptions()
    if (this.selectedFilter == 'all') {
      this.isFiltered = false
    }
    else {
      this.isFiltered = true
      this.filteredOptions = this.options.filter((option) => option[this.filterSettings.filterKey] == this.selectedFilter)
      this.initOptions(false, true)
    }
    this.returnData()
  }

  /**
   * @method returnData emits the selected event and sends selected options to component's parent
   */
  returnData() {
    const selectedOptions = this.options.filter((option) => option.selected == true)
    this.selected.emit(selectedOptions)
  }
}
