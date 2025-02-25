import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private user = new BehaviorSubject<any>(null);
    userProfile$ = this.user.asObservable();
  
    setUser(userData: any) {
      this.user.next(userData);
    }
  
    getUser() {
      return this.user.asObservable();
    }
  }
  