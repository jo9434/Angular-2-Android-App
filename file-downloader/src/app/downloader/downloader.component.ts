import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.scss']
})
export class DownloaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const msgsend1 = "Processing...", msgsend2 = "Generating Report...",
    msgsend3 = "Creating File, Report.PDF...", msgsend4 = "Adding File Content...",
    msgsend5 = "Completed.";
    
    $("#genreport").on("click",function(){
        $("#messagedisplay").css("display","block");
        for(let i=0; i<=12000; i++) {
            if(i==2000) {
                setTimeout(() => {
                    $("#messagetext").html(""+msgsend1);
                },i)
            }
            if(i==4000) {
                setTimeout(() => {
                    $("#messagetext").html(""+msgsend2);
                },i)
            }
            if(i==6000) {
                setTimeout(() => {
                    $("#messagetext").html(""+msgsend3);
                },i)
            }
            if(i==8000) {
                setTimeout(() => {
                    $("#messagetext").html(""+msgsend4);
                },i)
            }
            if(i==10000) {
                setTimeout(() => {
                    $("#messagetext").html(""+msgsend5);
                },i)
            }
            if(i==12000) {
                setTimeout(() => {
                    $("#messagedisplay").css("display","none");
                    $("#filedownloader").css("display","block");
                },i)
            }
        }
    })
  }

  message = "";
  filename = "Report.PDF";
  filepath = "../../assets/Report.pdf";

  generateReport = () => {
    $
  }
}
