import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/api/manager.service';
import { Manager, ManagerViewModel } from 'src/app/shared/models/manager';

@Component({
  selector: 'app-managers-control',
  templateUrl: './managers-control.component.html',
  styleUrls: ['./managers-control.component.scss']
})
export class ManagersControlComponent implements OnInit {
    managers!: ManagerViewModel[]

    constructor(private managerService: ManagerService)
    {}

    ngOnInit(): void {
        this.managerService.getAllManagers().subscribe({
            next: (response) => {
                this.managers = this.managerService.convertManagersListToViewList(response);
                console.log(this.managers);
            }
        })
    }

    deleteManager(id: number) {

    }

    modifyManager(id: number) {
        console.log(id)
    }


}
