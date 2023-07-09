import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import BrandImage from '../assets/images/logo1.jpg'

const Login = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8} >
            <CCardGroup style={{transform: 'scale(1.2)'}}>
              <CCard style={{ borderWidth : 0 }}>
                <img src={BrandImage} alt="_brandlogo" />
              </CCard>

              <CCard className="p-4" style={{ borderWidth : 0 }}>
                <CCardBody>
                  <CForm>
                    <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center'}}>Log In</h1>
                    <p>
                      Welcome to Marsupium, your best friend when it comes to picking up your child after school
                    </p>
                    <CInputGroup className="mb-3">
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <p className="text-medium-emphasis">Log in with the assigned username from your administrator</p>
                    <CRow>
                      <CCol xs={6}>
                        <Link to="/dashboard">
                          <CButton style={{ backgroundColor: '#56844B', fontWeight: 'bold'}} className="px-4 mt-5">
                            Let's start
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login


