import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { SearchStringPipe } from './search-string.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    SearchStringPipe,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
