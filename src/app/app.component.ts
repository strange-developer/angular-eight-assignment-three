import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isParagraphVisible = true;
  paragraphToggleTimestamps = [];

  addParagraphClick() {
    this.paragraphToggleTimestamps.push(new Date().toISOString());
  }

  handleParagraphToggle() {
    this.addParagraphClick();
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
