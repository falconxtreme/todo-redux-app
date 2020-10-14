import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    // this._store.subscribe((state) => {
    //   this.todos = state.todos;
    //   this.filtroActual = state.filtro;
    // });
    this._store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}
