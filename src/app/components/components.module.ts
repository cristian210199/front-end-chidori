import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [IncrementadorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    IncrementadorComponent
  ],
})
export class ComponentsModule { }
