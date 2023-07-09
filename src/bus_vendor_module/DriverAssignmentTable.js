import React from 'react';
import { useState } from 'react';
import { 
  Card, 
  CardBody, 
  Typography, 
} from "@material-tailwind/react";
import {
  CModal,
  CButton,
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
} from "@coreui/react"
import CIcon from '@coreui/icons-react'
import { cilPencil } from "@coreui/icons"
import '../css/style.css';

const TABLE_HEAD = ["ID", "DRIVER ID", "NAME", "EMAIL", "LICENSE", "BUS PLATE", "DATE", ""];

// Should have a table containing the drivers assingment in DB
const TABLE_ROWS = [
  {
    id: "01",
    driverid: "1024830",
    name: "Leox Gyasi",
    email: "l_gyasi@ctb.com",
    license: "S123448A",
    busplate: "B19363B",
    date: "01 June 2023",
  },
  {
    id: "02",
    driverid: "2048302",
    name: "Emily Johnson",
    email: "e_johnson@ctb.com",
    license: "S238493D",
    busplate: "B98472C",
    date: "15 July 2023",
  },
  {
    id: "03",
    driverid: "3058291",
    name: "David Lee",
    email: "d_lee@ctb.com",
    license: "S572839F",
    busplate: "B52739D",
    date: "10 August 2023",
  },
  {
    id: "04",
    driverid: "4082935",
    name: "Sophia Martinez",
    email: "s_martinez@ctb.com",
    license: "S882347H",
    busplate: "B12345A",
    date: "05 September 2023",
  },
  {
    id: "05",
    driverid: "5091827",
    name: "Daniel Wilson",
    email: "d_wilson@ctb.com",
    license: "S753928E",
    busplate: "B67890C",
    date: "20 October 2023",
  },
];

// Probably best to include in CSS folder instead of here
const buttoncolor = { 
  '--cui-btn-color': 'white',
  '--cui-btn-bg': '#56844B',
  '--cui-btn-border-color': 'transparent',
  '--cui-btn-hover-bg': '#56844B',
  '--cui-btn-hover-border-color': '#56844B',
}

export default function DriverAssignmentTable() {
  // hooks for modal
  const [visible, setVisible] = useState(false) // for assign driver modal

  return (
  <>
    <div className="flex justify-between items-center mb-4">
      <p 
        className="font-bold mx-auto text-lg"
        style={{ fontSize: '20px', color: '#56844B', paddingLeft: '17%'}} 
      >
      Driver Assignment
      </p>
      
      <CButton 
        id='marsupiumbtn'
        onClick={() => setVisible(!visible)}
        style={buttoncolor}
        className="px-5 py-2"
        >
        Assign Driver
      </CButton>

      {/* Modal for assign driver */}
      <CModal scrollable visible={visible}>
        <CButton onClick={() => setVisible(false)} color="link" style={{ marginLeft: 'auto' }}>X</CButton>
        <CContainer style={{padding: '25px'}}>
          <CForm className='overflow-auto'>
            <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '20px'}}>Assign Driver</h1>
            <div className="mb-2">
                <CFormLabel>Driver</CFormLabel>
                <CFormInput id=""/>
            </div>
            <div className="mb-2">
                <CFormLabel>Vehicle</CFormLabel>
                <CFormInput id=""/>
            </div>
            <div className="py-2" style={{marginTop: '35px'}}>
              <CButton style ={{'background': '#56844B', width: '100%'}}>
                Confirm
              </CButton>
            </div>
          </CForm>
        </CContainer> 
      </CModal>
    </div>
    
    {/* Table for displaying driver assignment */}
    <Card className="overflow-scroll h-full w-full">
      <CardBody style={{ padding: 0 }}>
        <table className="w-full min-w-max table-auto text-left">

          {/* Table header */}
          <thead className="bg-gray-200">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    color="black"
                    className="font-normal leading-none opacity-80"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table contents and mapping */}
          <tbody>
            {TABLE_ROWS.map(({ id,driverid,name,email,license,busplate,date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {driverid}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {license}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {busplate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <CIcon 
                    icon={cilPencil} 
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  </>
  );
}