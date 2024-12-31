import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private route = inject(ActivatedRoute);
  public id: string | null = '';
  ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);
  }
}
