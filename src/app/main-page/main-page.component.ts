import { Component, OnInit } from '@angular/core';
import { datas } from '../main-page/list.datasource';

declare var window: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {



  filterText:string = "";
  data = datas;

}
