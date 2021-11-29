import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CircularProgressbarStyles } from '../types';

@Component({
  selector: 'ng-circular-progressbar-with-children',
  templateUrl: './circular-progressbar-with-children.component.html',
  styleUrls: ['./circular-progressbar-with-children.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircularProgressbarWithChildrenComponent {
  @ViewChild('child') child!: ElementRef;
  @Input() value!: number;
  @Input() background = false;
  @Input() backgroundPadding = 0;
  @Input() circleRatio = 1;
  @Input() classes = {
    root: 'CircularProgressbar',
    trail: 'CircularProgressbar-trail',
    path: 'CircularProgressbar-path',
    text: 'CircularProgressbar-text',
    background: 'CircularProgressbar-background',
  };
  @Input() counterClockwise = false;
  @Input() className = '';
  @Input() maxValue = 100;
  @Input() minValue = 0;
  @Input() strokeWidth = 8;
  @Input() styles: CircularProgressbarStyles = {
    root: {},
    trail: {},
    path: {},
    text: {},
    background: {},
  };
  @Input() text = ''

  // childExists = false;

  // ngAfterViewInit() {
  //   if (this.child?.nativeElement.childNodes.length === 0){
  //     this.childExists = false
  //   }
  // }
}
