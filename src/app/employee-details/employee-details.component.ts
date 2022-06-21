import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  {

  tasks: {Employee: string, Designation: string}[] = [];

  constructor(private dataService: DataService ,private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
   this.tasks = this.dataService.tasks;
    console.log(this.tasks);
 }



 reloadComp() {
   this.router.navigate(['/display'], {relativeTo: this.route});
 }
}
