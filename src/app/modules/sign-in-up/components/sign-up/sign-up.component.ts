import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/api/auth.service';
import { HeaderType, UIPartsControlService } from 'src/app/services/ui-parts.service';
import { AuthModel, RegisterModel } from 'src/app/shared/models/auth-models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

    registrationForm!: FormGroup

    constructor(
        private uiPartsService: UIPartsControlService,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
        ) {
        this.uiPartsService.headerType = HeaderType.None;
        this.uiPartsService.resetMenu();
    }

    ngOnInit(): void {
        this.initForm();
    }

    ngOnDestroy(): void {
        this.uiPartsService.reset();
    }

    initForm() : void {
        this.registrationForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    register() {
        const authInfo: AuthModel = {
            login: this.registrationForm.get('email')?.value,
            password: this.registrationForm.get('password')?.value,
            role: 'client'
        }

        this.authService.register(authInfo)
            .subscribe({
                next: (response) => {
                    this.messageService.add({severity: 'success', summary: 'Success', detail: `You have successfully registered`});
                    this.router.navigate(['/sign', 'in']);
                },
                error: (error) => {
                    this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
                }
        })
    }

}
