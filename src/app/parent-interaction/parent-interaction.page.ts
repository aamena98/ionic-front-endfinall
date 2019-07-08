import { Component, OnInit } from '@angular/core';
import { ParentInteractService } from '../Services/parent-interact.service';
import { Teacher } from '../../Classes/teacher';
import { Router } from '@angular/router';
import { interact } from 'src/Classes/interaction';
import { interact_display } from "../../Classes/Interact_Display";
var moment = require('moment');
moment().format();
@Component({
  selector: 'app-parent-interaction',
  templateUrl: './parent-interaction.page.html',
  styleUrls: ['./parent-interaction.page.scss'],
})
export class ParentInteractionPage implements OnInit {

t_arr:Teacher[]=[];
t_id:number;
fk_t_id:number;
m_description:string;
m_date:Date;
fk_u_id:number=201899;
i_arr:interact_display[]=[];
  constructor(private _ser:ParentInteractService,private _route:Router) { }

  ngOnInit() {
    this._ser.viewTeacherList().subscribe(
      (data:Teacher[])=>{
        console.log(data);
        this.t_arr=data;
      
      }
    );
  }
  sendmsg()
  {
 this.m_date=moment(Date.now()).format("YYYY-MM-DD");
    console.log(this.m_date);
    console.log(this.fk_u_id);
    console.log(this.fk_t_id);
    console.log(this.m_description);

    this._ser.SendMessage(new interact(this.fk_u_id,this.fk_t_id,this.m_description,this.m_date)).subscribe(
      (data:any)=>{
        console.log(data);
       // this._route.navigate(['/parent-chat-display',this.fk_u_id]);
        alert('Message sent successfully');
      }
    );
  }

}
