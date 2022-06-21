import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {
    path: 'Info', component: InfoComponent,
  },
  {
    path: 'new', component: NewEmployeeComponent
  },
  {
    path:'detail',component:DetailsComponent
  },
  {
    path: 'about/:Id/:Employee/:Designation', component: AboutComponent
  }

]




@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NewEmployeeComponent,
    DetailsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
