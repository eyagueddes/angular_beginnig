import { Component ,OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  utilisateurs:any;
  public constructor(private service:UserService){

  }
  ngOnInit():void{
   // this.utilisateurs=this.service.getUsers();
   this.service.getUsers().subscribe(data=>this.utilisateurs=data);
  }

  
}
