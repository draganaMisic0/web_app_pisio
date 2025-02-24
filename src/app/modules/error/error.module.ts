import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideOAuthClient } from 'angular-oauth2-oidc';

@NgModule({ declarations: [], imports: [ErrorRoutingModule, AngularSvgIconModule.forRoot()], 
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideOAuthClient(),
    ] })
export class ErrorModule {}
