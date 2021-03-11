import { Component, OnInit } from '@angular/core';
import { Condomino } from '../../condomino.models';

@Component({
  selector: 'app-condomino-create',
  templateUrl: './condomino-create.component.html',
  styleUrls: ['./condomino-create.component.css']
})
export class CondominoCreateComponent implements OnInit {

  condomino:Condomino = new Condomino("","","",0,"","",0,"","",new Date());
  constructor() { }
 
  ngOnInit(): void {
    this.condomino = new Condomino("Alam","","Cih",0,"","",0,"","",new Date());
  }
  get diagnostic(){
    return JSON.stringify(this.condomino);
  }
  guardarCondomino(){
    alert(JSON.stringify(this.condomino));
    this.condomino = new Condomino("","","",0,"","",0,"","",new Date());
  }

}
