import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export const VIEWBOX_WIDTH = 100;
export const VIEWBOX_HEIGHT = 100;
export const VIEWBOX_HEIGHT_HALF = 50;
export const VIEWBOX_CENTER_X = 50;
export const VIEWBOX_CENTER_Y = 50;


function getPathDescription({ pathRadius, counterClockwise, }: {
  pathRadius: number; counterClockwise: boolean;
}) {
  const radius = pathRadius;
  const rotation = counterClockwise ? 1 : 0;

  // Move to center of canvas
  // Relative move to top canvas
  // Relative arc to bottom of canvas
  // Relative arc to top of canvas
  return `
      M ${VIEWBOX_CENTER_X},${VIEWBOX_CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
    `;
}

function getDashStyle({
  counterClockwise,
  dashRatio,
  pathRadius,
}: {
  counterClockwise: boolean;
  dashRatio: number;
  pathRadius: number;
}) {
  const diameter = Math.PI * 2 * pathRadius;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    // Have dash be full diameter, and gap be full diameter
    strokeDasharray: `${diameter}px ${diameter}px`,
    // Shift dash backward by gapLength, so gap starts appearing at correct distance
    strokeDashoffset: `${counterClockwise ? -gapLength : gapLength}px`,
  };
}

@Component({
  selector: '[doge-path]',
  templateUrl: './path.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathComponent implements OnChanges {
  @Input() className!: string;
  @Input() counterClockwise!: boolean;
  @Input() dashRatio!: number;
  @Input() pathRadius!: number;
  @Input() strokeWidth!: number;
  @Input() styles!: object;

  d!: string;
  updatedStyle!: object;

  ngOnChanges(changes: SimpleChanges): void {
    const pathRadius = this.pathRadius;
    const dashRatio = this.dashRatio;
    const counterClockwise = this.counterClockwise;
    this.d = getPathDescription({ pathRadius, counterClockwise });
    this.updatedStyle = Object.assign({}, this.styles, getDashStyle({ pathRadius, dashRatio, counterClockwise }));
  }
}
