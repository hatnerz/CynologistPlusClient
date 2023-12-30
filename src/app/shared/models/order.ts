import { Dog } from "./dog";
import { TrainingCenter } from "./training-center";

export interface Order {
    id: number;
    orderDate: Date;
    price: number | null;
    currency: string | null;
    comment: string | null;
    isPaid: boolean | null;
    isCompleted: boolean | null;
    approved: boolean | null;
    dogId: number | null;
    dogTrainingCenterId: number | null;
    dog: Dog | null;
    dogTrainingCenter: TrainingCenter | null;
}

export interface CreateOrderModel {
    comment: string | null;
    dogId: number;
    dogTrainingCenterId: number;
}