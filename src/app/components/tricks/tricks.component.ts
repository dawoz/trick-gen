import { Component, OnInit } from '@angular/core';
import {Club540Service} from "./service/club540.service";
import {Club540} from "./service/model/club540";
import {club540Dump} from "./service/model/club540Dump";

@Component({
  selector: 'app-tricks',
  templateUrl: './tricks.component.html',
  styleUrls: ['./tricks.component.css']
})
export class TricksComponent implements OnInit {
  club540Service: Club540Service
  club540: Club540 | undefined
  needsUpdate: boolean | undefined
  trickMap: (number | string)[][] | undefined;

  constructor(club540: Club540Service) {
    this.club540Service = club540
    this.club540Service.getTricks().subscribe(obj => {
      this.club540 = obj
      this.trickMap = this.club540!.data.tricks?.map(t => [t.id, t.name])
      this.checkNeedsUpdate();
    })
  }

  private checkNeedsUpdate() {
    this.needsUpdate = JSON.stringify(this.trickMap) !== club540Dump;
  }

  ngOnInit(): void {
  }
}
