import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css'],
})
export class AppCreateKittenComponent implements OnInit {
  kitten: Kitten = new Kitten('', '', '', '');

  @Output()
  sendKitten: EventEmitter<Kitten> = new EventEmitter();

  createKitten(): void {
    this.sendKitten.emit(this.kitten);
  }

  constructor() {}

  ngOnInit(): void {}
}
