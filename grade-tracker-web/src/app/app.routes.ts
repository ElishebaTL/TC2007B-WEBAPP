import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./teacher/pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'groups',
    loadComponent: () => import('./teacher/pages/groups/groups.page').then( m => m.GroupsPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./teacher/pages/students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'grade-capture',
    loadComponent: () => import('./teacher/pages/grade-capture/grade-capture.page').then( m => m.GradeCapturePage)
  },
  {
    path: 'report-cards',
    loadComponent: () => import('./teacher/pages/report-cards/report-cards.page').then( m => m.ReportCardsPage)
  },
  {
    path: 'report-card-detail',
    loadComponent: () => import('./teacher/pages/report-card-detail/report-card-detail.page').then( m => m.ReportCardDetailPage)
  },
  {
    path: 'comments',
    loadComponent: () => import('./teacher/pages/comments/comments.page').then( m => m.CommentsPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./teacher/pages/notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'reports',
    loadComponent: () => import('./teacher/pages/reports/reports.page').then( m => m.ReportsPage)
  },
  {
    path: 'groups/:id',
    loadComponent: () =>
      import('./teacher/pages/group-detail/group-detail.page').then(
        m => m.GroupDetailPage)
  },
  {
  path: 'grade-capture/:groupId',
  loadComponent: () =>
    import('./teacher/pages/grade-capture/grade-capture.page').then(
      (m) => m.GradeCapturePage
    ),
},
];
