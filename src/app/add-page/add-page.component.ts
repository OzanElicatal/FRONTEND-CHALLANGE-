import { Component, OnInit } from '@angular/core';
import { Add } from './add.model';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {

  newAdd: Add = new Add();

  get jsonAdd(){
    return JSON.stringify(this.newAdd)
  }

  addPerson(p: Add){
    console.log(this.jsonAdd)
  }
  

}
