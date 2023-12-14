import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/api/auth.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { SideMenuType, UIPartsControlService } from 'src/app/services/ui-parts.service';
import { HeaderType } from 'src/app/services/ui-parts.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

    HeaderType = HeaderType;
    SideMenuType = SideMenuType;
    selectedLanguage: string;

    userRole?: string;

    public clientMenuItems: MenuItem[] = [
        { label: 'Orders', routerLink: '/' },
        { label: 'Dogs', routerLink: '/dogs' },
        { label: 'Training Centers', routerLink: '/training-centers' }
    ]

    constructor(public uiPartsService: UIPartsControlService, public authService: AuthService, public localizationService: LocalizationService) {
        console.log(this.authService.isAuthenticated)
        this.selectedLanguage = localizationService.getCurrentLanguage();
    }

    ngOnInit() : void {
        if(this.authService.isAuthenticated()) {
            var userInfo = this.authService.getUserInfoFromToken()
            this.userRole = userInfo.role;
            console.log(userInfo);
        }
    }

    updateCurrentLanguage() {
        this.localizationService.setLanguage(this.selectedLanguage);
    }


}
