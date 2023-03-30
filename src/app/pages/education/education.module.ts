import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AbsolutePipe} from "@pipes/absolute.pipe";
import {EducationComponent} from "@pages/education/education.component";
import {EducationRoutingModule} from "@pages/education/education-routing.module";

@NgModule({
  declarations: [
    EducationComponent,
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
  ],
})
export class EducationModule {
}
