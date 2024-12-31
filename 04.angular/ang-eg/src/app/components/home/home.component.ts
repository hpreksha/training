import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  q="qq";
  // private router = inject(Router);
  constructor(private router: Router) {}
  navigate() {
    this.router.navigate(['/about']);
  }
}
