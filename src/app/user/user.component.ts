import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

const random_index = Math.floor(Math.random() * DUMMY_USERS.length);

 // type User = {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  interface User {
    id: string;
    avatar: string;
    name: string;
  }
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input() avatar!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required:true}) id!: string;
  // create object when we have multiple value instate of creating single property
  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }
  @Input({required: true}) user!:User;
 @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath() {
    //return '/users/' + this.avatar;
    return '/users/' + this.user.avatar;
  }
  onSelectUser(){
    //this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
  //selectedUser = DUMMY_USERS[random_index];
  // selectedUser = signal( DUMMY_USERS[random_index]);

  // imagePath = computed(() => '/users/' + this.selectedUser().avatar);
  // get imagePath(){
  //   return '/users/' + this.selectedUser().avatar;
  // }

  // onSelectUser(){
  //   //console.log("Clicked");
  //   const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
  //   //this.selectedUser = DUMMY_USERS[randomIndex];
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
