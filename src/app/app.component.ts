import { Component } from '@angular/core';
import {SpotifyService} from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tracks:any[]= new Array();
  constructor(private service:SpotifyService){
    this.search();
  }
  title = 'AngularSpotify';
  searchString="";
  
  search(){
    let x = this.service.getTrack(this.searchString).subscribe(
      
      result=>{
       
        this.tracks.push(result);
        console.log(this.tracks);
      }
    );
   // console.log(x);
  }
}
