import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.css']
})
export class AppUserKittenComponent implements OnInit {


  @Input()
myKittens : Array <Kitten> = [new Kitten ("","","",""),]

  constructor() {  }

  ngOnInit(): void {
  
  }

}
