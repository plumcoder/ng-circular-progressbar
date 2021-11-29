import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircularProgressbarModule } from 'ng-circular-progressbar';
import { ChangeProgressComponent } from './helpers/change-progress/change-progress.component';
import { ExampleComponent } from './helpers/example/example.component';
import { CodeComponent } from './helpers/code/code.component';
import { RadialSeparatorsComponent } from './helpers/radial-separators/radial-separators.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeProgressComponent,
    ExampleComponent,
    RadialSeparatorsComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircularProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
