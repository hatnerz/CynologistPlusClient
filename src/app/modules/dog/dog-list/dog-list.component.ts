import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from 'src/app/shared/models/dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
    
    @Input()
    dogs!: Dog[]
    // TODO: actions?:
    constructor(private router: Router) {}

    goDogDetails(clientId: number | undefined) {
        this.router.navigate(["/dog", "dog", clientId])
    }
}
