import { Injectable } from "@angular/core";
import { Note } from "./note";

@Injectable()
export class VarGlobService {
  private listNote = Array<Note>();
  public nowDetail :any

  constructor() {
    this.addNote(new Note("judul1", new Date(), "this.isi", false));
    this.addNote(new Note("judul2", new Date(), "this.isi", false));
    this.addNote(new Note("judul3", new Date(), "this.isi", true));
  }

  addNote(_newNote: Note) {
    var newId = 0;
    if (this.listNote.length == 0) {
      newId = 0;
    } else {
      newId = this.listNote[this.listNote.length - 1].id + 1;
    }
    var temp = _newNote;
    temp.id = newId;
    // console.log(temp.id);
    this.listNote.push(temp);
  }

  getNote() {
    return this.listNote;
  }

  getFavoritedNote(){
    return (this.getNote().filter(_note => _note.isFavorite));
  }

  favoriteNote(_id: number){
    this.getNote().filter(_note => _note.id == _id)[0].isFavorite = true
    console.log(this.getNote().filter(_note => _note.isFavorite)[0].isFavorite)
  }

  unfavoriteNote(_id: number){
    this.getNote().filter(_note => _note.id == _id)[0].isFavorite = false
    console.log(this.getNote().filter(_note => _note.isFavorite)[0].isFavorite)
  }

}
