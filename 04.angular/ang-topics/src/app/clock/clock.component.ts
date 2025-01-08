import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  l_time:any;
  curr_time:any='';
  curr_time2:any='';
  interval_id:any='';
  d_time:any;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    console.log("ngOnInit method.");
  }


  ngAfterViewInit() {
    console.log("AfterView method.");
    this.l_time = localStorage.getItem("s_time");
    if(!this.l_time) {
      this.l_time = new Date();
      this.l_time = this.l_time.toString();
      localStorage.setItem("s_time", this.l_time);
    }
    this.curr_time = Date.parse(this.l_time);
    this.curr_time2 = new Date(this.curr_time);
    console.log(this.curr_time2.toLocaleTimeString()); 

    this.interval_id = setInterval(()=> {  
      console.log('si');
      this.curr_time2 = new Date(this.curr_time2.getTime() + 1000);
      this.d_time = this.curr_time2.toLocaleTimeString();
      this.cdr.detectChanges();
    },1000);
  } 


  ngOnDestroy() {
    if(this.interval_id) {
      clearInterval(this.interval_id);
    }
    localStorage.setItem("s_time", this.curr_time2.toString());
    console.log("Destroy method.");
  }

  @HostListener('window:beforeunload', ['$event'])
  func(event: BeforeUnloadEvent) {
    if(this.interval_id) {
      clearInterval(this.interval_id);
    }
    localStorage.setItem("s_time", this.curr_time2.toString());
    console.log("Before unload method.");
  }
}
