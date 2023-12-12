import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderType, UIPartsControlService } from 'src/app/services/ui-parts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

    constructor(private uiPartsService: UIPartsControlService) {}

    ngOnInit(): void {
        this.uiPartsService.headerType = HeaderType.None;
    }

    ngOnDestroy(): void {
        this.uiPartsService.reset();
    }

}