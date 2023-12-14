import { Component, Input } from '@angular/core';
import { TrainingCenter } from 'src/app/shared/models/training-center';

@Component({
  selector: 'app-training-center-list-element',
  templateUrl: './training-center-list-element.component.html',
  styleUrls: ['./training-center-list-element.component.scss']
})
export class TrainingCenterListElementComponent {
    @Input()
    trainingCenterData?: TrainingCenter

    @Input()
    isCanBeOrdered: boolean = false;

    @Input()
    IsCanBeModified: boolean = false;

    @Input()
    IsCanBeDeleted: boolean = false;


    getAdress() {
        var resultString: string = "";
        if(this.trainingCenterData == null)
            return resultString;

        if(this.trainingCenterData.adress != null) {
            if(this.trainingCenterData.adress.country != null) {
                resultString += this.trainingCenterData.adress.country + ", "
            }
            if(this.trainingCenterData.adress.city != null) {
                resultString += this.trainingCenterData.adress.city + ", "    
            }
            if(this.trainingCenterData.adress.street != null) {
                resultString += this.trainingCenterData.adress.street + " "   
                if(this.trainingCenterData.adress.house != null) {
                    resultString += this.trainingCenterData.adress.house 
                }
            }
        }
        
        return resultString;
    }
}
