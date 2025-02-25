import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ThemeService } from '../../../../../core/services/theme.service';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { GoogleAuthService } from 'src/app/core/services/google-auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css'],
  imports: [ClickOutsideDirective, NgClass, RouterModule, AngularSvgIconModule],
  providers: [GoogleAuthService],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
          visibility: 'hidden',
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
  
})
export class ProfileMenuComponent implements OnInit, OnDestroy {
  
  public isOpen = false;

  public profileMenu = [
   /* {
      title: 'Your Profile',
      icon: './assets/icons/heroicons/outline/user-circle.svg',
      link: '/profile',
    },
    {
      title: 'Settings',
      icon: './assets/icons/heroicons/outline/cog-6-tooth.svg',
      link: '/settings',
    },
    */
    {
      title: 'Log out',
      icon: './assets/icons/heroicons/outline/logout.svg',
      link: '/auth',
    },
  ];

  public themeColors = [
    {
      name: 'base',
      code: '#e11d48',
    },
    {
      name: 'yellow',
      code: '#f59e0b',
    },
    {
      name: 'green',
      code: '#22c55e',
    },
    {
      name: 'blue',
      code: '#3b82f6',
    },
    {
      name: 'orange',
      code: '#ea580c',
    },
    {
      name: 'red',
      code: '#cc0022',
    },
    {
      name: 'violet',
      code: '#6d28d9',
    },
  ];

  public themeMode = ['light', 'dark'];
  public userProfile: any = { name: 'Guest', picture: 'assets/images/guest.jpg' };
  public userProfileSubscription$: any;
  constructor(public themeService: ThemeService, 
              private userService: UserService,
              private router: Router,
              private googleAuthService: GoogleAuthService,
              private cdr: ChangeDetectorRef) {}

  
  ngOnInit() : void {
   /*
   this.userProfileSubscription$ =  this.googleAuthService.onProfileChange().subscribe((profile) => {
    if(profile)
    {
      this.userProfile = profile;
    }
    console.log("user subscription fired");
    console.log(profile);
    this.cdr.detectChanges();
   });
   */

   this.userProfileSubscription$ = this.googleAuthService.onProfileChange().subscribe((profile: any) => {
    console.log("Subscription fired");
    console.log(profile);
    this.userProfile = profile;
    this.cdr.detectChanges();
   });

   this.userProfile = this.googleAuthService.getProfileData();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription$.unsubscribe();
  }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }

  handleLogout(){
    this.googleAuthService.logout();
    this.router.navigate(['auth/sign-in']);
  }
}
