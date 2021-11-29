import { NgModule } from '@angular/core';
import { NgCircularProgressbarComponent } from './circular-progressbar/circular-progressbar.component';
import { PathComponent } from './path/path.component';
import { CommonModule } from '@angular/common';
import { CircularProgressbarWithChildrenComponent } from './circular-progressbar-with-children/circular-progressbar-with-children.component';


@NgModule({
  declarations: [
    NgCircularProgressbarComponent,
    CircularProgressbarWithChildrenComponent,
    PathComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgCircularProgressbarComponent,
    CircularProgressbarWithChildrenComponent
  ]
})
export class NgCircularProgressbarModule { }
