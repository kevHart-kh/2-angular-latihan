import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class VarGlobService {
  private listNote = Array<Note>()

  constructor() { }

  addNote(_newNote : Note){
    this.listNote.push(_newNote)
  }

  getNote(){
    return this.listNote
  }



}