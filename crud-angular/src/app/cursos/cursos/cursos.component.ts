import { Component, OnInit } from '@angular/core';
import { Cursos } from '../model/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //inicialização do Array
  cursos: Cursos[] = [
    { _id: '1', nome: 'Angular', categoria: 'Front-End'}
  ];
  colunas = ['nome','categoria'];

  constructor() {
    //inicialização do Array dentro do construtor
    //this.cursos = [];
  }

  ngOnInit() {
  }

}
