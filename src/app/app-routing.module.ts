import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'attendance', loadChildren: './attendance/attendance.module#AttendancePageModule' },
  { path: 'notice', loadChildren: './notice/notice.module#NoticePageModule' },
  { path: 'parent-interaction', loadChildren: './parent-interaction/parent-interaction.module#ParentInteractionPageModule' },
  { path: 'interaction-display', loadChildren: './interaction-display/interaction-display.module#InteractionDisplayPageModule' },
  { path: 'teacher-interaction', loadChildren: './TeacherDashboard/teacher-interaction/teacher-interaction.module#TeacherInteractionPageModule' },
  { path: 'reply-page/:id', loadChildren: './reply-page/reply-page.module#ReplyPagePageModule' },
  { path: 'parent-chat-display', loadChildren: './parent-chat-display/parent-chat-display.module#ParentChatDisplayPageModule' },
  { path: 'leave', loadChildren: './leave/leave.module#LeavePageModule' },
  { path: 'leave-display', loadChildren: './TeacherDashboard/leave-display/leave-display.module#LeaveDisplayPageModule' },
  { path: 'exam-result', loadChildren: './exam-result/exam-result.module#ExamResultPageModule' },
  { path: 'my-demo', loadChildren: './my-demo/my-demo.module#MyDemoPageModule' },
  { path: 'student-reply-page/:id', loadChildren: './student-reply-page/student-reply-page.module#StudentReplyPagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
