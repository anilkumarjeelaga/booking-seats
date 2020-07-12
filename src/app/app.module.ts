import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { DepartmentListComponent } from "./department-list/department-list.component";
// import { EmployeeListComponent } from "./employee-list/employee-list.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
// import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BannerComponent } from "./components/banner/banner.component";
import { EventsComponent } from "./components/events/events.component";
import { EventSearchPipe } from "./custom-pipes/event-search.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventBookingComponent } from "./components/event-booking/event-booking.component";
import { ErrorComponent } from "./components/error/error.component";
@NgModule({
  declarations: [
    AppComponent,
    // DepartmentListComponent,
    // EmployeeListComponent,
    // PageNotFoundComponent,
    // DepartmentDetailComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    EventsComponent,
    EventSearchPipe,
    EventBookingComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
