import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user:{Employee:string,Designation:number}

  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
     this.user={
      Employee:this.route.snapshot.params['Employee'],
      Designation:this.route.snapshot.params['Designation']

     };
  }
   
}
