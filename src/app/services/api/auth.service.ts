import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

export const ACCESS_TOKEN_KEY = 'pet4you_access_token'

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        @Inject('API_URL') private apiUrl: string,
        private jwtHelper: JwtHelperService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    /*register(authInfo: AuthResponseModel): Observable<any> {
        return this.http.post(`${this.apiUrl}api/Auth/register`, authInfo)
            /*.pipe(tap(res => {
                if(res) {
                    this.router.navigate(['sign', 'in'], { relativeTo: this.route }).then();
                }
            }))
    }*/

    /*login(authInfo: AuthResponseModel): Observable<any> {
        return this.http.post(`${this.apiUrl}api/Auth/login`, authInfo)
            .pipe(tap((res: any) => {
                localStorage.setItem(ACCESS_TOKEN_KEY, res.token);
            }))
    }*/

    isAuthenticated(): boolean {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);

        return !this.jwtHelper.isTokenExpired(token);
    }

    logout() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        this.router.navigate(['sign', 'in'], { relativeTo: this.route }).then();
    }
}
