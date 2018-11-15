import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './main/components/footer/footer.component';
import {ToolbarComponent} from './main/components/toolbar/toolbar.component';
import {ProgressBarComponent} from './main/components/progress-bar/progress-bar.component';
import {PageNotFoundComponent} from './main/components/page-not-found/page-not-found.component';
import {HomeComponent} from './main/components/home/home.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule, MatRippleModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    ProgressBarComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
