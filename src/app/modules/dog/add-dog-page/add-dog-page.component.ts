import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/api/auth.service';
import { DogService } from 'src/app/services/api/dog.service';
import { Dog } from 'src/app/shared/models/dog';

@Component({
  selector: 'app-add-dog-page',
  templateUrl: './add-dog-page.component.html',
  styleUrls: ['./add-dog-page.component.scss']
})
export class AddDogPageComponent implements OnInit {
    
    addDogForm!: FormGroup;

    constructor(
        private authService: AuthService,
        private dogService: DogService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.addDogForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            breed: new FormControl('', [Validators.required]),
        })
    }

    sendForm() {
        if (this.addDogForm.invalid) {
            return;
        }
        var dog: Dog = {
            name: this.addDogForm.get('name')?.value,
            breed: this.addDogForm.get('breed')?.value,
            clientId: this.authService.getUserInfoFromToken().userId,
        }

        this.dogService.addDog(dog).subscribe({
            next: (response) => {
                this.messageService.add({severity: 'success', summary: 'Sucess', detail: 'Dog successfully added'});
            },
            error: (error) => {
                this.messageService.add({severity: 'success', summary: 'Error', detail: error.error.message });
            }
        });
    }

}
