import {NgModule} from '@angular/core';
import {AboutComponent} from "@pages/about/about.component";
import {AboutRoutingModule} from "@pages/about/about-routing.module";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [AboutRoutingModule],
})
export class AboutModule {}
