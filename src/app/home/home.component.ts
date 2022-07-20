import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';
import { addTodo, addItem } from '../store/actions/todo.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos$: Observable<any>;
  constructor(private store: Store<{todos: any}>) { 
    this.todos$ = store.select('todos');
  }
  ngOnInit(): void {
    
  }
  addTodo(){
    this.store.dispatch(addTodo())
  }
  add(user: string){
    this.store.dispatch(addItem({user}))
  }
}
