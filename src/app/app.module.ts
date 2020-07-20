import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {RouterModule, Routes} from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'googlemap', component: GooglemapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
