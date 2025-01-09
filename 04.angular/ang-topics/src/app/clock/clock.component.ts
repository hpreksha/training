import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  currentTime: Date | null = null;
  intervalId: ReturnType<typeof setInterval>|null|undefined;
  displayTime: string = '00:00:00';

  ngOnInit() {
    console.log('ngOnInit method.');
  }

  ngAfterViewInit() {
    console.log('AfterView method.');
    const storedTime = localStorage.getItem('setTime');

    if(storedTime) {
      this.currentTime = new Date(storedTime);
    }
    else {
      this.currentTime = new Date();
      localStorage.setItem('setTime', this.currentTime.toString());
    }
    console.log('Start at: ', this.currentTime.toLocaleTimeString());
    this.intervalId = setInterval(() => {
      if (this.currentTime instanceof Date) {
        this.currentTime = new Date(this.currentTime.getTime() + 1000);
        this.displayTime = this.currentTime.toLocaleTimeString();
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (this.currentTime instanceof Date) {
      localStorage.setItem('setTime', this.currentTime.toString());
    }
    console.log('Exit at: ', this.currentTime);
    console.log('Destroy method.');
  }

  @HostListener('window:beforeunload', ['$event'])
  func(event: BeforeUnloadEvent) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (this.currentTime instanceof Date) {
      localStorage.setItem('setTime', this.currentTime.toString());
    }
    console.log('Before unload method.');
  }
}
