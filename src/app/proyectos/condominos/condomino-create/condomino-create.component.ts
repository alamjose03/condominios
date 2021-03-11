import { Component, OnInit } from '@angular/core';
import { Condomino } from '../../condomino.models';

interface Estado {
  model1: string;
  valor: string;
}
interface Sexo{
  model: string;
  valor: string;
}

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
  estados: Estado[] = [
    {model1: 'soltero(a)', valor: 'Soltero(a)'},
    {model1: 'casado(a)', valor: 'Casado(a)'},
    {model1: 'viudo(a)', valor: 'Viudo(a)'}
  ];
  sexos: Sexo[] = [
    {model: 'masculino', valor: 'Masculino'},
    {model: 'femenino', valor: 'Femenino'}
  ]

}
