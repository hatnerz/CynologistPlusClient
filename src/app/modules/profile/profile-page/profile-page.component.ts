import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

    constructor(private authService: AuthService)
    {}

    logout() {
        this.authService.logout();    
    }

}
