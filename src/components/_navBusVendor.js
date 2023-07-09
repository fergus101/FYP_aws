import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome, 
  cilPeople,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _navBusVendor = [
  //CoreUI open source SVG -> https://coreui.io/icons/all/
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/bus-vendor/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  }, 

  {
    component: CNavItem,
    name: 'Drivers',
    to: '/bus-vendor/drivers',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Bus',
    to: '/bus-vendor/busmanagement',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Assignment',
    to: '/bus-vendor/driverassignment',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
]

export default _navBusVendor