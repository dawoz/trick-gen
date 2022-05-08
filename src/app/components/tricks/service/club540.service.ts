import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Club540} from "./model/club540";

@Injectable({
  providedIn: 'root'
})
export class Club540Service {
  http: HttpClient
  url = "http://www.club540.com/api/tricks"

  constructor(http: HttpClient) {
    this.http = http
  }

  getTricks(): Observable<Club540> {
    return this.http.get<Club540>(this.url)
  }
}
