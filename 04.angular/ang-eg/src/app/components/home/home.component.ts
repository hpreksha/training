import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CoursesComponent } from "../../courses/courses.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  q="qq";
  constructor(private router: Router) {}
  navigate() {
    this.router.navigate(['/about']);
  }
}
