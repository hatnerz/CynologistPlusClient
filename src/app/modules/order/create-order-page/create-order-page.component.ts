import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/api/auth.service';
import { DogService } from 'src/app/services/api/dog.service';
import { OrderService } from 'src/app/services/api/order.service';
import { TrainingCenterService } from 'src/app/services/api/training-center.service';
import { Dog } from 'src/app/shared/models/dog';
import { CreateOrderModel } from 'src/app/shared/models/order';
import { TrainingCenter } from 'src/app/shared/models/training-center';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.scss']
})
export class CreateOrderPageComponent implements OnInit {

    createOrderForm!: FormGroup;
    userDogs!: Dog[];

    constructor(
        private dogService: DogService, 
        private trainingCenterService: TrainingCenterService,
        private authService: AuthService,
        private orderService: OrderService,
        private route: ActivatedRoute,
        private messageService: MessageService,
        private router: Router,
    )
    {}

    ngOnInit(): void {
        this.initializeForm();
        var userId = this.authService.getUserInfoFromToken().userId
        this.dogService.getClientDogs(userId).subscribe({
            next: (response) => {
                this.userDogs = response;
            }
        })
        var trainingCenterId = this.route.snapshot.params["id"];
        this.trainingCenterService.getTrainingCenter(trainingCenterId).subscribe({
            next: (response) => {
                var trainingCenter : TrainingCenter = response;
                this.createOrderForm.get('trainingCenter')?.setValue(trainingCenter);
            }
        })
    }

    private initializeForm() {
        this.createOrderForm = new FormGroup({
            comment: new FormControl(''),
            dog: new FormControl(''),
            trainingCenter: new FormControl('', [Validators.required]),
        });
    }

    createOrder() {
        var createOrderModel: CreateOrderModel = {
            comment: this.createOrderForm.get('comment')?.value,
            dogId: this.createOrderForm.get('dog')?.value.id,
            dogTrainingCenterId: this.createOrderForm.get('trainingCenter')?.value.id
        }

        this.orderService.createOrder(createOrderModel).subscribe({
            next: (response) => {
                this.messageService.add({severity:'success',summary:'Sucess',detail:'Order sucessfully created'})
                this.router.navigate(['/order','client-list'])
            },
            error: (error) => {
                this.messageService.add({severity:'error',summary:'Error',detail: error.error.message});
            }
        })
    }
}
