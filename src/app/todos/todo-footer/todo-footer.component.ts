import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['completados', 'pendientes', 'todos'];
  pendientes: number = 0;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    // this._store
    //   .select('filtro')
    //   .subscribe((filtro) => (this.filtroActual = filtro));
    this._store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  public cambiarFiltro(filtro: actions.filtrosValidos) {
    this._store.dispatch(actions.setFiltro({ filtro: filtro }));
  }

  public limpiarCompletados() {
    this._store.dispatch(borrarCompletados());
  }
}
