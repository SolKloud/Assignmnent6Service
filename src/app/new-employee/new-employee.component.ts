import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

  constructor(private dataService:DataService) { }

  onClicked(employee: string, designation: string){
     this.dataService.addEmployee({Employee: employee, Designation: designation})
  }

}
