import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService) {}

  ngOnInit() {}

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName("selector");

    for (let link of selectores) {
      link.classList.remove("working");
    }

    link.classList.add("working");
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName("selector");
    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
      if( ref.getAttribute('data-theme') === tema){
        ref.classList.add("working");
        break;
      }
    }
  }

}
