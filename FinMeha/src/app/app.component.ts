import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { LoginComponent } from "./features/auth/components/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, LoginComponent],
  template: `
    <app-login />
    <app-register />
  `,
  // styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FinMeha';
}
