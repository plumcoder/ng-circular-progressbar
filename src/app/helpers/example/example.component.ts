import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styles: [':host { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {

  @ViewChild('place') el!: ElementRef;
  @Input() label: string = '';
  @Input() description: string = '';

  html: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.description);
  }

  ngAfterViewInit() {
  }
}
