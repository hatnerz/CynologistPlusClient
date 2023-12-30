import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/api/auth.service';
import { HeaderType, UIPartsControlService } from 'src/app/services/ui-parts.service';
import { AuthModel } from 'src/app/shared/models/auth-models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

    // This object is used to track and automatically cancel subscriptions in a component
    destroy = new Subject<any>();
    signInForm!: FormGroup;
    roles = [
        { label: 'Client', value: 'Client' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Cynologist', value: 'Cynologist' },
        { label: 'Admin', value: 'Admin' },
      ];
      
    constructor(
        private uiPartsService: UIPartsControlService, 
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router) 
    {
        this.uiPartsService.headerType = HeaderType.None;
        this.uiPartsService.resetMenu();
    }

    // Lifecycle hook that performs when component has initialized
    ngOnInit(): void {
        this.initializeForm();
    }

    // Lifecycle hook that performs when component has destroyed
    ngOnDestroy(): void {
        this.uiPartsService.reset();
    }

    private initializeForm(): void {
        this.signInForm = new FormGroup({
            login: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            role: new FormControl('', Validators.required)
        });
    }

    logIn() {
        const authInfo: AuthModel = {
            login: this.signInForm.get('login')?.value,
            password: this.signInForm.get('password')?.value,
            role: this.signInForm.get('role')?.value
        }

        this.authService.login(authInfo)
            .pipe(takeUntil(this.destroy))
            .subscribe({
                next: (response) => {
                    this.messageService.add({severity: 'success', summary: 'Success', detail: `You have successfully logged in as ${authInfo.role}`});
                    this.router.navigate(['/']);
                },
                error: (error) => {
                    var summary = "Error";
                    var message = "Error";

                    // 401 error code means unathorized
                    if(error.status == 401) {
                        summary = "Incorrect credentials";
                        message = error.error.message;
                    }
                    
                    // We receive code 0 when we can't send request to the server
                    if(error.status == 0) {
                        summary = "Connection refused";
                        message = "Cannot connect to server" 
                    }
                    this.messageService.add({severity: 'error', summary: summary, detail: message})    
                }
            })
    }
}
