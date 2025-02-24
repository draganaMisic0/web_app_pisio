import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  private profileSubject = new BehaviorSubject<any>(null);

    public oAuthService = inject(OAuthService);
  constructor(

    private router: Router) 
    { 
      this.initConfiguration();
    }
  
  initConfiguration(){
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '442477657792-ofmmk39q3rrj425ossfmj3a7v4upr5i3.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/dashboard',
      scope: 'openid profile email'
    }

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oAuthService.initImplicitFlow();
  }

  logout(){
    try{
      this.oAuthService.revokeTokenAndLogout();
      this.oAuthService.logOut();
      this.profileSubject.next(null)
    }
    catch(error){
      console.log(error);
    }
  }

  isLoggedIn(): boolean{
    if(this.getProfile() != null && this.getToken() != null){
      return true;
    }
    else{
      return false;
    }
  }

  getProfile(){
    return this.oAuthService.getIdentityClaims();
  }

  getToken(){
    return this.oAuthService.getAccessToken();
  }

  onProfileChange() {
    return this.profileSubject.asObservable(); // Observable for profile updates
  }

  publishProfile(){
    this.profileSubject.next(this.getProfile());
  }


}