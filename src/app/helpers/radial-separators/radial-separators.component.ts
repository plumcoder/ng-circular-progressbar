import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'radial-separators',
  templateUrl: './radial-separators.component.html',
  styleUrls: ['./radial-separators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadialSeparatorsComponent implements OnChanges {
  @Input() count!: number;
  @Input() styles!: any;
  elems!: any[];
  turns!: number;

  ngOnChanges() {
    this.elems = Array(this.count).fill(9);
    this.turns = 1 / this.count;
  }

}
