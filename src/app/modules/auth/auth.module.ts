import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { provideOAuthClient } from 'angular-oauth2-oidc';

@NgModule({ imports: [AuthRoutingModule, AngularSvgIconModule.forRoot()], providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideOAuthClient()
] })
export class AuthModule {}
