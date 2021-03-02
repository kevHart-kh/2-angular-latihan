import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
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

  toDetail() {
    this.router.navigate(["/detail"]);
    this.namaPage = "DETAIL";
  }

  toFav() {
    this.router.navigate(["/fav"]);
    this.namaPage = "FAVORITE";
  }
}
