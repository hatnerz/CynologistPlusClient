import { Component } from '@angular/core';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.scss']
})
export class DataBaseComponent {

    lastBackupDate: any;

    restoreDatabase() {
        throw new Error('Method not implemented.');
    }
    
    createBackup() {
        throw new Error('Method not implemented.');
    }
}
