import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendance_url:string='http://localhost:3000/s_attendance1/';
  constructor(public _http:HttpClient) { }

  getattendanceByUserid(fk_u_id:number)
  {
    return this._http.get(this.attendance_url+fk_u_id);
  }
  onStudentAttendance(student_id){
    return this._http.get(this.attendance_url+student_id);
   }
}
