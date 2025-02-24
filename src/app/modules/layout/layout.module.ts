import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
import { provideOAuthClient } from 'angular-oauth2-oidc';
@NgModule({ imports: [LayoutRoutingModule, AngularSvgIconModule.forRoot()], providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideOAuthClient(),
] })
export class LayoutModule {}
