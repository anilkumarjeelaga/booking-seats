import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { DepartmentListComponent } from "./department-list/department-list.component";
// import { EmployeeListComponent } from "./employee-list/employee-list.component";
// import { DepartmentDetailComponent } from "./department-detail/department-detail.component";

// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EventsComponent } from "./components/events/events.component";
import { ErrorComponent } from "./components/error/error.component";
import { EventBookingComponent } from "./components/event-booking/event-booking.component";
import { FooterComponent } from "./components/footer/footer.component";
const routes: Routes = [
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "events", component: EventsComponent },

  { path: "events/:id", component: EventBookingComponent },
  { path: "**", component: ErrorComponent },
  // { path: "", redirectTo: "/events", pathMatch: "full" },
  // { path: "department-list/:id", component: DepartmentListComponent },
  // { path: "employee-list", component: EmployeeListComponent },
  // { path: "department-detail", component: DepartmentDetailComponent },
  // { path: "events", component: EventsComponent },
  // { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingcomponents = [DepartmentListComponent, EmployeeListComponent]
