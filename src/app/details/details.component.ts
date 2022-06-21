import { DataService } from './../services/data.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() task;
 
  constructor(private dataService:DataService,private router: Router, private route: ActivatedRoute){}

  onEdit(i:number,Designation:string){
    this.dataService.changeDesignation({index:i, NewDesignation: Designation});
  }


  

  load(detail) {
  //  console.log(detail);
  //  this.dataService.statusUpdated.emit(detail);
    this.router.navigate(['/about'], {relativeTo: this.route});
     
  }


}
