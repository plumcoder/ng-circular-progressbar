import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'change-progress',
  templateUrl: './change-progress.component.html',
  styleUrls: ['./change-progress.component.scss'],
  exportAs: 'progress',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeProgressComponent implements OnInit, OnDestroy {

  @Input() values: number[] = [];
  private readonly INTERVAL = 1000;
  private curIdx = 0;
  private intervalHandle: any;

  ngOnInit() {
    this.intervalHandle = setInterval(() => {
      this.curIdx = (this.curIdx + 1) % this.values.length;
    }, this.INTERVAL);
  }

  get value() {
    return this.values[this.curIdx];
  }

  ngOnDestroy() {
    clearInterval(this.intervalHandle);
  }
}
