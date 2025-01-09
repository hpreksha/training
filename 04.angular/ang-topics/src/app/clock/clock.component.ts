import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  currentTime = signal<Date | null>(null);
  intervalId: ReturnType<typeof setInterval>|null = null;
  displayTime: string='00:00:00';

  ngOnInit() {
    console.log('ngOnInit method.');
  }

  ngAfterViewInit() {
    console.log('AfterView method.');
    const storedTime = localStorage.getItem('setTime');

    if(storedTime) {
      this.currentTime.set(new Date(storedTime));
    }
    else {
      this.currentTime.set(new Date());
      localStorage.setItem('setTime', this.currentTime()!.toString());
    }
    console.log('Start at: ', this.currentTime());
    this.intervalId = setInterval(() => {
      if (this.currentTime() instanceof Date) {
        this.currentTime.set(new Date(this.currentTime()!.getTime() + 1000));
        this.displayTime = this.currentTime()!.toLocaleTimeString();
      }
    }, 1000);
  }

  exitComponent() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (this.currentTime() instanceof Date) {
      localStorage.setItem('setTime', this.currentTime()!.toString());
    }
    console.log('Exit at: ', this.currentTime());
  }

  ngOnDestroy() {
    this.exitComponent();
    console.log('Destroy method.');
  }

  @HostListener('window:beforeunload', ['$event'])
  func(event: BeforeUnloadEvent) {
    this.exitComponent();
    console.log('Before unload method.');
  }
}
