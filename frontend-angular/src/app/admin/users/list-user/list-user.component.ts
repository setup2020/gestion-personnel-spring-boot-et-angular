import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'png-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: IUser[]=[];
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.load();
  }

  load():void{

    this.userService.getAllUsers().subscribe({
      next:(users:IUser[])=>{
        this.users=users;
        console.log(users);
        
      }
    })
  }
}
