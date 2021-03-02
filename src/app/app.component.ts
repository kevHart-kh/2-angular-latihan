import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { Note } from "./note";
import { VarGlobService } from "./var-glob.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  namaPage = "";

  constructor(private router: Router, public globalVar: VarGlobService) {
    this.toInput();
  }

  toInput() {
    this.router.navigate(["/input"]);
    this.namaPage = "INPUT";
  }

  private toDetail() {
    this.router.navigate(["/detail"]);
    this.namaPage = "DETAIL";
  }

  toFav() {
    this.router.navigate(["/fav"]);
    this.namaPage = "FAVORITE";
  }
  detail(_id: number) {
    var note = this.globalVar.getNote().filter(_note => _note.id == _id);
    this.globalVar.nowDetail = note[0];
    this.toDetail();
  }

  btnFav(_id: number){
    this.globalVar.favoriteNote(_id)
  }

  btnUnvaf(_id: number){
    this.globalVar.unfavoriteNote(_id)
  }

}
