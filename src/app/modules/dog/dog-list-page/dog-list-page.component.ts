import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';
import { DogService } from 'src/app/services/api/dog.service';
import { Dog } from 'src/app/shared/models/dog';

@Component({
  selector: 'app-dog-list-page',
  templateUrl: './dog-list-page.component.html',
  styleUrls: ['./dog-list-page.component.scss']
})
export class DogListPageComponent {

    clientId!: number;
    dogs: Dog[] = [
        {
            name: "test",
            breed: "test",
            clientId: 1
        },
        {
            name: "test2",
            breed: "test2",
            clientId: 2
        }
    ]

    
    constructor(private dogService: DogService, private authService: AuthService) 
    {}

    ngOnInit(): void {
        this.clientId = this.authService.getUserInfoFromToken().userId;
        this.dogService.getClientDogs(this.clientId).subscribe({
            next: (response) => { this.dogs = response; console.log(this.dogs) }
        })
    }
}
