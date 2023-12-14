import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { DogService } from 'src/app/services/api/dog.service';
import { Dog } from 'src/app/shared/models/dog';
import { DogSkill } from 'src/app/shared/models/dog-skill';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.scss']
})
export class DogPageComponent implements OnInit {
    
    clientId!: number
    dog!: Dog
    dogSkills!: DogSkill[]
    isLoading: boolean = true;

    constructor(private route: ActivatedRoute, private dogService: DogService)
    {
        var dogId = this.route.snapshot.params["id"];
        this.dogService.getDog(dogId).subscribe({
            next: (response) => { 
                this.dog = response; 

                this.dogService.getDogSkills(dogId).subscribe({
                    next: (response) => {
                        this.dogSkills = response;
                        this.isLoading = false 
                    }
                });
            }
        });
    }
    
    ngOnInit(): void {
    }


}
