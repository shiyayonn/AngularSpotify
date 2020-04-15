import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   httpOptions = {
    headers: new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':  'application/json',
      'Authorization': 'Bearer BQC_r6Sjm-i0zBYeEl8W1y8a3akVLWPkJ74Tp3xT0UYQRNnbqpQDT4K24kv4R10pu3MpWu6pgmHL9oFp2sIPxsxLESGNQ1ylrCPjDWuF_QGSs88O1KFGtno7mJ_9sJn4Ct8T2PghbM5jgCxPWSqXrEVTHNhJxKsAE3Q'
    })
  }

  constructor(private http:HttpClient) { }
   getTrack(track){
    let url = `https://api.spotify.com/v1/search?q=${track}&type=track&limit=10`;
    return this.http.get(url,this.httpOptions);
  }
}
