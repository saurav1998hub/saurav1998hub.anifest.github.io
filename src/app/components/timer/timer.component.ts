import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit {
  targetDate: Date = new Date(2024, 3, 6,12,0,0);
  difference: number = 0;
  intervalId: number = 0;
  months: Array<string> = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentTime: string = this.getMonthDateYear(this.targetDate);

  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  ngAfterViewInit() {
    this.startTimer();
  }

  private startTimer() {
    this.intervalId = +setInterval(() => {

      this.tickTock();
      if (this.difference < 0) {
        this.resetTimer();
      }
      this.updateDisplay();

    }, 1000);
  }

  private resetTimer() {
    clearInterval(this.intervalId); // Clear the previous interval
    this.targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // Add a day to the target date
    this.difference = 0; // Reset the difference
    this.currentTime = this.getMonthDateYear(this.targetDate); // Update current time display
    this.startTimer(); // Start a new interval
  }

  

  private getMonthDateYear(date: Date): string {
    return `${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  private updateDisplay(): void {
    const hoursLeft = Math.floor(this.difference);
    const minutesLeft = (this.difference - hoursLeft) * 60;
    this.hours.nativeElement.innerText = (hoursLeft + Math.floor(minutesLeft / 60)).toString();
    this.minutes.nativeElement.innerText = (Math.floor(minutesLeft % 60)).toString();
    this.seconds.nativeElement.innerText = (60 - new Date().getSeconds()).toString();
  }

  private tickTock(): void {
    const now: number = new Date().getTime();
    this.difference = (this.targetDate.getTime() - now) / (1000 * 60 * 60);
  }
}
