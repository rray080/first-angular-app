import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // template: '<h1>Hello</h1> <div>This is for testing</div>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgIf, NgFor],
})
export class AppComponent {

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    console.log('Selected user is ' + id);
    this.selectedUserId = id;
  }
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId ?: string;
}
