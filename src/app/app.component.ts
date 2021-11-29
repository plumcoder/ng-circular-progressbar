import { ChangeDetectionStrategy, Component } from '@angular/core';
import { buildStyles } from 'ng-circular-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  percentage = 66;

  buildStyles(config: any) {
    return buildStyles(config);
  }
}
