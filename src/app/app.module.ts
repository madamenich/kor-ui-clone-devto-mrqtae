import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PostCardComponent } from "./post-card/post-card.component";
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PostCardComponent, ListCardComponent],
  bootstrap: [AppComponent],
  // import CUSTOM_ELEMENTS_SCHEMA to enable webcomponents
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
