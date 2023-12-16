import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/api/auth.service';
import { ManagerService } from 'src/app/services/api/manager.service';
import { TrainingCenterService } from 'src/app/services/api/training-center.service';
import { AuthModel, RegisterModel } from 'src/app/shared/models/auth-models';
import { Manager, ManagerViewModel } from 'src/app/shared/models/manager';
import { TrainingCenter } from 'src/app/shared/models/training-center';

@Component({
  selector: 'app-managers-control',
  templateUrl: './managers-control.component.html',
  styleUrls: ['./managers-control.component.scss']
})
export class ManagersControlComponent implements OnInit {
    addManagerForm!: FormGroup;
    managers!: ManagerViewModel[]
    isManagerAddOverlayOpened: boolean = false;
    isManagerModifyOverlayOpened: boolean = false;
    trainingCentersList!: TrainingCenter[];
    modifyManagerForm!: FormGroup<any>;

    constructor(
        private managerService: ManagerService, 
        private authService: AuthService,
        private messageService: MessageService,
        private trainingCentersService: TrainingCenterService)
    {}

    ngOnInit(): void {
        this.initForm();
        this.initModifyForm();
        this.getAllManagers();
        this.getAllTrainingCenters();
    }

    initForm() {
        this.addManagerForm = new FormGroup({
            login: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    initModifyForm() {
        this.modifyManagerForm = new FormGroup({
            managerId: new FormControl(''),
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            dogTrainingCenter: new FormControl('')
        })
    }

    getAllTrainingCenters() {
        this.trainingCentersService.getAllTrainingCenters().subscribe({
            next: (response) => this.trainingCentersList = response
        })
    }

    getAllManagers() {
        this.managerService.getAllManagers().subscribe({
            next: (response) => {
                this.managers = this.managerService.convertManagersListToViewList(response);
                console.log(this.managers);
            }
        })
    }

    updateManager() {
        var manager: Manager = {
            id: this.modifyManagerForm.get('managerId')?.value,
            firstName: this.modifyManagerForm.get('firstName')?.value,
            lastName: this.modifyManagerForm.get('lastName')?.value,
            dogTrainingCenterId: this.modifyManagerForm.get('dogTrainingCenter')?.value.id
        }
        this.managerService.updateManager(manager).subscribe({
            next: (response) => {
                this.messageService.add({severity:'success', summary:'Success', detail:'Manager data sucessfully updated'});
                this.isManagerModifyOverlayOpened = false;
                this.initModifyForm();
                this.getAllManagers();
            },
            error: (error) => {
                this.messageService.add({severity:'error', summary:'Error', detail: error.error.message});
            }
            
        })
    }

    deleteManager(id: number) {

    }

    openAddManager() {
        this.isManagerAddOverlayOpened = true;
    }

    addManager() {
        if(!this.addManagerForm.valid) 
        {
            this.messageService.add({severity:'error', summary:'Error', detail:'You need to fill all fields'});
            return;
        }

        var managerCredentials: AuthModel = {
            login: this.addManagerForm.get('login')?.value,
            password: this.addManagerForm.get('password')?.value,
            role: 'manager'
        }

        this.authService.register(managerCredentials).subscribe({
            next: (response) => {
                console.log("SUCCESS");
                this.messageService.add({severity:'success', summary:'Success', detail: response.message})
                this.isManagerAddOverlayOpened = false;
                this.getAllManagers();
                this.initForm();
            },
            error: (error) => {
                this.messageService.add({severity:'error', summary:'Error', detail: error.error.message});
            }
        })
    }

    startModifyManager(id: number) {
        this.modifyManagerForm.get('managerId')?.setValue(id);
        this.isManagerModifyOverlayOpened = true;
    }

}
