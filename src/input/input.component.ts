import { Component, OnInit } from '@angular/core';
import { Note } from '../app/note';
import { VarGlobService } from '../app/var-glob.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  judul: String;
  tanggal: Date;
  isi: String;
  isFavorite: Boolean;

  constructor(public globalVar : VarGlobService) { 
  }

  ngOnInit() {
  }

  btnSave(){
    this.tanggal = new Date()
    this.globalVar.addNote(new Note(this.judul, this.tanggal, this.isi, false))
    // alert(this.globalVar.getNote()[0].judul)
  }

}