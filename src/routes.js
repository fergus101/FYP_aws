import React from 'react'

//Sys admin
const DashboardSystemAdmin = React.lazy(() => import('./system_admin_module/DashboardSystemAdmin'))
const SchoolTable = React.lazy(() => import('./system_admin_module/SchoolTable'))

//Sch admin
const DashboardSchoolAdmin = React.lazy(() => import('./school_admin_module/DashboardSchoolAdmin'))
const AnnouncementTable = React.lazy(() => import('./school_admin_module/AnnouncementTable'))
const TeacherTable = React.lazy(() => import('./school_admin_module/TeacherTable'))
const StudentTable = React.lazy(() => import('./school_admin_module/StudentTable'))
const SchoolSchedule = React.lazy(() => import('./school_admin_module/SchoolSchedule'))

//Bus vendor
const DashboardBusVendor = React.lazy(() => import('./bus_vendor_module/DashboardBusVendor'))
const DriverTable = React.lazy(() => import('./bus_vendor_module/DriverTable'))
const BusManagementTable = React.lazy(() => import('./bus_vendor_module/BusManagementTable'))
const DriverAssignmentTable = React.lazy(() => import('./bus_vendor_module/DriverAssignmentTable'))

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/system-admin/dashboard', name: 'System Admin Dashboard', element: DashboardSystemAdmin },
  { path: '/system-admin/school', name: 'SchoolTable', element: SchoolTable },

  { path: '/school-admin/dashboard', name: 'School Admin Dashboard', element: DashboardSchoolAdmin },
  { path: '/school-admin/announcements', name: 'Announcements', element: AnnouncementTable },
  { path: '/school-admin/teachers', name: 'Teacher', element: TeacherTable },
  { path: '/school-admin/students', name: 'Student', element: StudentTable },
  { path: '/school-admin/schedule', name: 'Schedule', element: SchoolSchedule },

  { path: '/bus-vendor/dashboard', name: 'Bus Vendor Dashboard', element: DashboardBusVendor },
  { path: '/bus-vendor/drivers', name: 'Drivers', element: DriverTable },
  { path: '/bus-vendor/busmanagement', name: 'Bus Management', element: BusManagementTable },
  { path: '/bus-vendor/driverassignment', name: 'Driver Assignment', element: DriverAssignmentTable },
]

export default routes