import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SimpleMultiselectComponent } from './simple-multiselect.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [SimpleMultiselectComponent],
  exports: [SimpleMultiselectComponent],
})
export class SimpleMultiselectModule { }
