import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions: string[] = ["Beginner", "Advanced", "Pro"];

  selectSubscription: string = "Advanced";

  @ViewChild("form") form!: NgForm;

  onSubmit() {
    console.log(this.form.value);
  }
}
