import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderType, UIPartsControlService } from 'src/app/services/ui-parts.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

    signInForm!: FormGroup;
    
    roles = [
        { label: 'Client', value: 'Client' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Cynologist', value: 'Cynologist' },
        { label: 'Admin', value: 'Admin' },
      ];
    
      
    constructor(private uiPartsService: UIPartsControlService) {}

    ngOnInit(): void {
        this.uiPartsService.headerType = HeaderType.None;
        this.initializeForm();
    }

    ngOnDestroy(): void {
        this.uiPartsService.reset();
    }

    private initializeForm(): void {
        this.signInForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            role: new FormControl('', Validators.required)
        });
      }
    
}
