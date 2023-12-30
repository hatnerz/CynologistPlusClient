import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { DogService } from 'src/app/services/api/dog.service';
import { Dog } from 'src/app/shared/models/dog';
import { DogSkillLog, DogSkillViewModel } from 'src/app/shared/models/dog-skill';
import { DatePipe } from '@angular/common';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.scss'],
  providers: [DatePipe]
})
export class DogPageComponent implements OnInit {
    
    @ViewChild('chart') chart: any;
    clientId!: number
    dog!: Dog
    dogSkills!: DogSkillViewModel[]
    isLoading: boolean = true;

    data: any;
    options: any;

    constructor(
        private route: ActivatedRoute, 
        private dogService: DogService, 
        private datePipe: DatePipe,
        private localizationService: LocalizationService)
    {
        var dogId = this.route.snapshot.params["id"];
        this.dogService.getDog(dogId).subscribe({
            next: (response) => { 
                this.dog = response; 

                this.dogService.getDogSkills(dogId).subscribe({
                    next: (response) => {
                        this.dogSkills = response;
                        this.isLoading = false;
                    }
                });
            }
        });
    }
    
    getCorrectSkillValue(skill: DogSkillViewModel) {
        if(skill.skill.measureUnit == "boolean") {
            if(skill.value == 1)
                return "Possess"
            else
                return "Not possess"
        }
        else {
            return skill.value + " " + skill.skill.measureUnit
        }
    }

    visualizeDogSkill(skillId: any, dogId: any, dogSkillName: string) {
        this.dogService.getDogSkillChange(dogId, skillId).subscribe({
            next: (response) => {
                console.log(skillId, dogId);
                this.changeChartData(response, dogSkillName);
            }
        })
    }

    changeChartData(dogSkillLog: DogSkillLog[], dogSkillName: string) {
        var labels = [];
        var data = [];
        if(dogSkillLog.length == 1) {
            labels.push('');
            labels.push(this.changeDate(dogSkillLog[0].changeDate));
            labels.push('');
            data = [,dogSkillLog[0].currentValue,];
        }
        else {
            for(var dogSkill of dogSkillLog) {
                labels.push(this.changeDate(dogSkill.changeDate));
                data.push(dogSkill.currentValue);
            }
        }
        this.data.labels = labels;
        this.data.datasets[0].data = data;
        this.data.datasets[0].label = dogSkillName;
        this.chart.refresh();
    }

    changeDate(date: Date) {
        var timeFormat = this.localizationService.getCurrentTimeFormat()?.format;
        var dateFormat = this.localizationService.getCurrentDataFormat()?.value;
        console.log(timeFormat, dateFormat);
        return this.datePipe.transform(date, timeFormat + " " + dateFormat);
    }

    ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: [''],
            datasets: [
                {
                    label: 'Dog Skill',
                    data: [],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }


}
