import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VIEWBOX_CENTER_X, VIEWBOX_CENTER_Y, VIEWBOX_HEIGHT, VIEWBOX_HEIGHT_HALF, VIEWBOX_WIDTH } from '../constants';
import { CircularProgressbarStyles } from '../types';

@Component({
  selector: 'ng-circular-progressbar',
  templateUrl: './circular-progressbar.component.html',
  styleUrls: ['circular-progressbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgCircularProgressbarComponent implements OnChanges {
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

  pathRadius!: number;
  pathRatio!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pathRadius = this.getPathRadius();
    this.pathRatio = this.getPathRatio();
  }

  get VIEWBOX() {
    return `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`;
  }

  get VIEWBOX_CENTER_X() {
    return VIEWBOX_CENTER_X;
  }

  get VIEWBOX_CENTER_Y() {
    return VIEWBOX_CENTER_Y;
  }

  get VIEWBOX_HEIGHT_HALF() {
    return VIEWBOX_HEIGHT_HALF;
  }

  private getBackgroundPadding() {
    if (!this.background) {
      // Don't add padding if not displaying background
      return 0;
    }
    return this.backgroundPadding;
  }

  private getPathRadius() {
    // The radius of the path is defined to be in the middle, so in order for the path to
    // fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
    return VIEWBOX_HEIGHT_HALF - this.strokeWidth / 2 - this.getBackgroundPadding();
  }

  // Ratio of path length to trail length, as a value between 0 and 1
  private getPathRatio() {
    const boundedValue = Math.min(Math.max(this.value, this.minValue), this.maxValue);
    return (boundedValue - this.minValue) / (this.maxValue - this.minValue);
  }

}
