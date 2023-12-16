import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';
import { OrderService } from 'src/app/services/api/order.service';
import { TrainingCenterService } from 'src/app/services/api/training-center.service';
import { Order } from 'src/app/shared/models/order';
import { TrainingCenter } from 'src/app/shared/models/training-center';

@Component({
  selector: 'app-training-center-orders-page',
  templateUrl: './training-center-orders-page.component.html',
  styleUrls: ['./training-center-orders-page.component.scss']
})
export class TrainingCenterOrdersPageComponent {
    orders!: Order[];
    trainingCenter!: TrainingCenter;
    loading: boolean = true;

    constructor(
        private orderService: OrderService,
        private authService: AuthService,
        private trainingCenterService: TrainingCenterService
    ) {}

    ngOnInit(): void {
        var managerId = this.authService.getUserInfoFromToken().userId;
        var trainingCenter : TrainingCenter;
        this.trainingCenterService.getManagerTrainingCenter(managerId).subscribe({
            next: (response) => {
                this.trainingCenter = response;
                this.orderService.getTrainingCenterOrders(this.trainingCenter?.id).subscribe({
                    next: (response) => {
                        this.orders = response;
                        this.loading = false;
                    }
                });
            }
        })
        //this.orderService.getTrainingCenterOrders(clientId).subscribe({
        //    next: (response) => {
        //        console.log(response);
        //        this.orders = response;
        //    }
        //})
    }
}
