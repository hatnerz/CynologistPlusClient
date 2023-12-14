import { Injectable } from "@angular/core";
import { ACCESS_TOKEN_KEY } from "./api/auth.service";
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
}) 
export class UserService {

    /*getUserInfoFromToken(): any {
        const jwtToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        const tokenInfo = this.getDecodedAccessToken(jwtToken!);
    
        return {
            username: tokenInfo.name,
            userId: +tokenInfo.userId,
            role: tokenInfo.role
        };
    }
    
    getDecodedAccessToken(token: string): any {
        try {
            return jwtDecode(token);
        } catch (Error) {
            return null;
        }
    }*/
    
}