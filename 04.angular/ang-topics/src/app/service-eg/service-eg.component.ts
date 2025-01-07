// File Content: Component using service
import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import {NgFor} from '@angular/common';
@Component({
  selector: 'app-service-eg',
  imports: [NgFor],
  providers: [UserdataService],
  templateUrl: './service-eg.component.html',
  styleUrl: './service-eg.component.css'
})
export class ServiceEgComponent {
title="Service Example";
users:any;
// private ud = inject(UserdataService);
constructor(private userdata: UserdataService) {
this.users = userdata.users();
}
}
