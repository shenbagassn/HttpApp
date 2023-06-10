import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '../title-case.pipe';

@NgModule({
  declarations: [
    TitleCasePipe
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TitleCasePipe
  ]
})
export class SharedModule { }
