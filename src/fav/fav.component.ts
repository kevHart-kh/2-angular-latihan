import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VarGlobService } from '../app/var-glob.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  constructor(public globalVar : VarGlobService, private router:Router) { }

  ngOnInit() {
  }

  detail(_id: number) {
    var note = this.globalVar.getNote().filter(_note => _note.id == _id);
    this.globalVar.nowDetail = note[0];
    this.toDetail();
  }

  private toDetail() {
    this.router.navigate(["/detail"]);
  }
}