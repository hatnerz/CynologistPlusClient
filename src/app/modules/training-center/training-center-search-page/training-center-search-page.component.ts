import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TrainingCenterService } from 'src/app/services/api/training-center.service';
import { TrainingCenter } from 'src/app/shared/models/training-center';
import { AuthService } from 'src/app/services/api/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-training-center-search',
  templateUrl: './training-center-search-page.component.html',
  styleUrls: ['./training-center-search-page.component.scss']
})
export class TrainingCenterSearchPageComponent implements OnInit {

    isAddTrainingCenterDialogOpened: boolean = false;
    trainingCentersList?: TrainingCenter[];
    addTrainingCenterForm!: FormGroup

    constructor(
        private trainingCenterService: TrainingCenterService,
        private messageService: MessageService,
        public authService: AuthService) 
    {}

    ngOnInit(): void {
        this.trainingCenterService.getAllTrainingCenters().subscribe({
            next: (result) => this.trainingCentersList = result,
            error: (error) => this.messageService.add({severity: "error", summary: "Error", detail: error})
        })
        
        this.initForm();
    }

    initForm() {
        this.addTrainingCenterForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            country: new FormControl('', [Validators.required]),
            city: new FormControl(''),
            street: new FormControl(''),
            house: new FormControl('')
        })
    }

    addTrainingCenter() {
        var trainingCenter: TrainingCenter = {
            id: 0,
            name: this.addTrainingCenterForm.get('name')?.value,
            description: this.addTrainingCenterForm.get('description')?.value,
            adress: {
                id: 0,
                country: this.addTrainingCenterForm.get('country')?.value,
                city: this.addTrainingCenterForm.get('city')?.value,
                street: this.addTrainingCenterForm.get('street')?.value,
                house: this.addTrainingCenterForm.get('house')?.value
            }
        }
        console.log(trainingCenter);

        this.trainingCenterService.addTrainingCenter(trainingCenter).subscribe({
            next: () => {
                this.messageService.add({severity:'success',summary:'Success',detail:'Training center sucessfully added'});
                this.isAddTrainingCenterDialogOpened = false;
                this.trainingCenterService.getAllTrainingCenters().subscribe({
                    next: (result) => this.trainingCentersList = result,
                    error: (error) => this.messageService.add({severity: "error", summary: "Error", detail: error})
                })
            },
            error: (error) => {
                this.messageService.add({severity:'error',summary:'error',detail:error.error.message});
            }
        })
    }
}
