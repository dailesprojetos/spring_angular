import { Observable } from 'rxjs';
import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Cursos } from '../model/cursos';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Observable<Cursos[]>
  colunas = ['nome','categoria'];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.list();
  }

  ngOnInit() {

  }

}
