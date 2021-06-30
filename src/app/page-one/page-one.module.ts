import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';



@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule
  ],
  exports:[PageOneComponent]
})
export class PageOneModule { }
