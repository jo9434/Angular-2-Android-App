import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'file-download';
  
  ngOnInit():void {
    $("#iconopen").on("click",function(){
      $("#submenu").toggleClass("openMenu");
      $("#iconopen").toggleClass("fa-xmark fa-bars");
    })
  }

  showMenu = () => {
    $
  };
}
