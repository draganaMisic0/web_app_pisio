import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { ThemeService } from './core/services/theme.service';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './modules/auth/pages/sign-in/sign-in.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster],
  
})
export class AppComponent {
  title = 'Angular Tailwind';

  constructor(public themeService: ThemeService) {

  }
}
