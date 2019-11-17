import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, GraphQLService } from 'src/sdk';
import { catchError, concatMap, filter, map, tap } from 'rxjs/operators';


export const WEB_AUTH_TOKEN = 'WEB_AUTH_TOKEN';
export const WEB_AUTH_USER = 'WEB_AUTH_USER';

@Injectable({
  providedIn: 'root'
})
export class WebAuthService {
  private _token = new BehaviorSubject<string>(null);
  private _user = new BehaviorSubject<User>(null);

  public user$: Observable<User> = this._user.asObservable();

  public get token(): string {
    return this._token.getValue();
  }

  public set token(token: string) {
    localStorage.setItem(WEB_AUTH_TOKEN, token);
    this._token.next(token);
  }

  public get user(): User {
    return this._user.getValue();
  }

  public set user(user: User) {
    localStorage.setItem(WEB_AUTH_USER, JSON.stringify(user));
    this._user.next(user);
  }

  constructor(private graphql: GraphQLService) {
    this.hydrate();
  }

  hydrate() {
    const token = localStorage.getItem(WEB_AUTH_TOKEN);
    if (token) {
      console.log(`Hydrated token from localStorage token WEB_AUTH_TOKEN`);
      this._token.next(token);
    }
    const user = localStorage.getItem(WEB_AUTH_USER);
    if (user) {
      console.log(`Hydrated user from localStorage token WEB_AUTH_USER`);
      this._user.next(JSON.parse(user));
    }
  }

  handleAction({ type, payload }: { payload: any; type: string }) {
    console.log({ type, payload });
    switch (type) {
      case 'LOGIN':
        return of(null);
      default:
        return of(null);
    }
  }

  login({ email, password }) {
    return this.graphql.login({ email, password }).pipe(
      map(result => result.data.login.token),
      filter(token => !!token),
      tap((token: string) => this.token = token),
      catchError(err => {
        console.log('err', err);
        return err;
      }),
      concatMap(() => this.me())
    );
  }

  register({ email, password, name, username}) {
    return this.graphql.register({ email, password, name, username }).pipe(
      map(result => result.data.register.token),
      filter(token => !!token),
      tap((token: string) => this.token = token),
      catchError(err => {
        console.log('err', err);
        return err;
      }),
      concatMap(() => this.me())
    );
  }

  logout() {
    localStorage.removeItem(WEB_AUTH_TOKEN);
    localStorage.removeItem(WEB_AUTH_USER);
    this._token.next(null);
    this._user.next(null);
    console.log('Logged out...');
    return of(null);
  }

  me() {
    return this.graphql.me()
      .pipe(
        map(result => result.data.me),
        filter(me => !!me),
        tap((me: User) => this.user = me)
      )
  }
}
