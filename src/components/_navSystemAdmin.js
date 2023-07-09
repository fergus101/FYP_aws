import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilSchool,
  cilDollar,
  cilPeople,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _navSystemAdmin = [
  //CoreUI open source SVG -> https://coreui.io/icons/all/
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/system-admin/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'School',
    to: '/system-admin/school',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Company',
    to: '/system-admin/dashboard',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Subscription',
    to: '/system-admin/dashboard',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },

]

export default _navSystemAdmin