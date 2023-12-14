import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TrainingCenterService } from 'src/app/services/api/training-center.service';
import { TrainingCenter } from 'src/app/shared/models/training-center';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-training-center-search',
  templateUrl: './training-center-search-page.component.html',
  styleUrls: ['./training-center-search-page.component.scss']
})
export class TrainingCenterSearchPageComponent implements OnInit {

    trainingCentersList?: TrainingCenter[];

    testTrainingCenter: TrainingCenter = {
        id: 0,
        name: "Jaguar",
        description: "Lorem ipsum asdfadsfadsfdafadfasdfadsfadsfdsaf asdf sad sdf asf dsafadsfasdf dsfa ds",
        adress: {
            id: 0,
            country: "Ukraine",
            city: "Lviv",
            street: "Horodotska",
            house: "4"
        }
    }

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
    }
}
