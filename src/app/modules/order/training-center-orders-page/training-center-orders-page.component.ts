import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/api/auth.service';
import { OrderService } from 'src/app/services/api/order.service';
import { TrainingCenterService } from 'src/app/services/api/training-center.service';
import { LocalizationService } from 'src/app/services/localization.service';
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
    isOrderModifyDialogOpened: boolean = false;
    modifyOrderForm!: FormGroup;
    currentModifyingOrder: any = {};

    yesNoOptions = [
        {
            label: "Yes",
            value: true
        },
        {
            label: "No",
            value: false
        }
    ]


    constructor(
        private orderService: OrderService,
        private authService: AuthService,
        private trainingCenterService: TrainingCenterService,
        public localizationService: LocalizationService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        var managerId = this.authService.getUserInfoFromToken().userId;
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
    }

    initModifyOrderDialog(order: Order) {
        this.currentModifyingOrder = order;
        this.isOrderModifyDialogOpened = true;
    }

    modifyOrder() {
        this.orderService.changeOrder(this.currentModifyingOrder).subscribe({
            next: (response) => {
                console.log(response);
                this.messageService.add({severity:"success", summary:"Success", detail:"Order sucessfully modified"});
                this.isOrderModifyDialogOpened = false;
                this.orderService.getTrainingCenterOrders(this.trainingCenter?.id).subscribe({
                    next: (response) => {
                        this.orders = response;
                    }
                });
            },
            error: (error) => {
                this.messageService.add({severity:"error", summary:"Error", detail: error.error.message});
            }
        });
    }
}
