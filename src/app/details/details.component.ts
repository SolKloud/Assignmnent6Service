import { DataService } from './../services/data.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  task: {Employee: string, Designation: string}[] = [];

  constructor(private dataService: DataService ,private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
   this.task = this.dataService.tasks;
    console.log(this.task);
 }



 reloadComp() {
   this.router.navigate(['/detail'], {relativeTo: this.route});
 }

  onEdit(i:number,Designation:string){
    this.dataService.changeDesignation({index:i, NewDesignation: Designation});
  }

}
