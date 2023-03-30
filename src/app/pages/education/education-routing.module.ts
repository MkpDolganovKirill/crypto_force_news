import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EducationComponent} from "@pages/education/education.component";

const routes: Routes = [
  {
    path: '',
    component: EducationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {}
