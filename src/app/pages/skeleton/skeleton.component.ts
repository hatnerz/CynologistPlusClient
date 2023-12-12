import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SideMenuType, UIPartsControlService } from 'src/app/services/ui-parts.service';
import { HeaderType } from 'src/app/services/ui-parts.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {

    HeaderType = HeaderType;
    SideMenuType = SideMenuType;

    public clientMenuItems: MenuItem[] = [
        { label: 'Orders', routerLink: '/' },
        { label: 'Dogs', routerLink: '/dogs' },
        { label: 'Training Centers', routerLink: '/training-centers' }
    ]

    constructor(public uiPartsService: UIPartsControlService) {
    }


}
