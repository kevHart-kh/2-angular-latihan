import { Component, OnInit } from '@angular/core';
import { VarGlobService } from '../app/var-glob.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public globalVar: VarGlobService) { }

  ngOnInit() {
  }

}