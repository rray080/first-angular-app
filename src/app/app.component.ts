import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  // template: '<h1>Hello</h1> <div>This is for testing</div>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    console.log('Selected user is ' + id);
    this.selectedUserId = id;
  }
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId?: string;
}
