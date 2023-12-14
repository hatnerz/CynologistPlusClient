import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager, ManagerViewModel } from 'src/app/shared/models/manager';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

    constructor(
        private http: HttpClient, 
        @Inject('API_URL') private apiUrl: string
    ) {}

    getAllManagers() : Observable<any> {
        return this.http.get(`${this.apiUrl}api/Manager`);
    }

    convertManagersListToViewList(managers: Manager[]) : ManagerViewModel[] {
        var convertedManagers: ManagerViewModel[] = []
        for(let manager of managers) {
            var managerViewModel: ManagerViewModel = {
                id: manager.id,
                firstName: manager.firstName,
                lastName: manager.lastName,
                dogTrainingCenterName: `${manager.dogTrainingCenter?.name} (id: ${manager.dogTrainingCenter?.id})`,
                login: manager.authCredential?.login
            }
            convertedManagers.push(managerViewModel);
        }
        return convertedManagers;
    }
}
