import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import BrandLogo from '../assets/images/brand-logo1.jpg'

// sidebar nav config 
// Validation of which side bar to import
import navigationSystemAdmin from './_navSystemAdmin'
import navigationSchoolAdmin from './_navSchoolAdmin'
import navigationBusVendor from './_navBusVendor'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      style={{ backgroundColor: '#56844B' }}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }} >
      <CSidebarBrand 
        className="d-none d-md-flex" 
        to="/dashboard" 
        style={{ backgroundColor: '#56844B' }}>
        <img src={BrandLogo} alt="MARSUPIUM" style={{ width: '60%'}} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {/* Validation of which actor's navbar to display in the website should be here */}
          {/* ... */}
          <p className='px-3'>System Admin</p>
          <AppSidebarNav items={navigationSystemAdmin} />
          <div className='py-3' />
          <p className='px-3'>School Admin</p>
          <AppSidebarNav items={navigationSchoolAdmin} />
          <div className='py-3' />
          <p className='px-3'>Bus vendor</p>
          <AppSidebarNav items={navigationBusVendor} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
