import React from 'react';
import { useState } from 'react';
import { 
  Card, 
  CardBody, 
  Typography, 
  Tooltip, 
  IconButton,
} from "@material-tailwind/react";
import {
  CModal,
  CButton,
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
} from "@coreui/react"
import { TrashIcon } from "@heroicons/react/24/solid";
import '../css/style.css';

const TABLE_HEAD = ["ID", "FULL NAME", "USERNAME", "EMAIL", "SCHOOL", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    name: "Avar Kriss",
    username: "gvps_sa_kriss",
    email: "a_kriss@moe.edu.sg",
    school: "Greenview Primary School", 
  },
  {
    id: "02",
    name: "Avar Kriss",
    username: "gvps_sa_kriss",
    email: "a_kriss@moe.edu.sg",
    school: "Greenview Primary School", 
  },
  {
    id: "03",
    name: "Avar Kriss",
    username: "gvps_sa_kriss",
    email: "a_kriss@moe.edu.sg",
    school: "Greenview Primary School", 
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

export default function SchoolTable() {
  const [visible, setVisible] = useState(false)
  return (
  <>
    <div className="flex justify-between items-center mb-4">
      <p 
        className="font-bold mx-auto text-lg"
        style={{ fontSize: '20px', color: '#56844B', paddingLeft: '17%'}} 
      >
      School Account Management
      </p>
      
      <CButton 
        id='marsupiumbtn'
        onClick={() => setVisible(!visible)}
        style={buttoncolor}
        className="px-5 py-2"
        >
        Create Admin
      </CButton>

      {/* modal for creating school admin */}
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CContainer style={{padding: '25px'}}>
          <CForm className='overflow-auto'>
            <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '20px'}}>Create School Admin User</h1>
            
            <div className="mb-2">
                <CFormLabel htmlFor="fullName">Full name</CFormLabel>
                <CFormInput id="fullName"/>
            </div>

            <div className="mb-2">
                <CFormLabel htmlFor="username">Username</CFormLabel>
                <CFormInput id="username"/>
            </div>

            <div className="mb-2">
                <CFormLabel htmlFor="email">Email</CFormLabel>
                <CFormInput id="email"/>
            </div>

            <div className="mb-2">
                <CFormLabel htmlFor="school">School</CFormLabel>
                <CFormInput id="school"/>
            </div>

            <div className="py-2" style={{marginTop: '35px'}}>
              <CButton style ={{'background': '#56844B', width: '100%'}}>
                Create
              </CButton>
            </div>
          </CForm>
        </CContainer> 
      </CModal>
    </div>
    
    {/* table for displaying all school admin */}
    <Card className="overflow-scroll h-full w-full">
      <CardBody style={{ padding: 0 }}>
        <table className="w-full min-w-max table-auto text-left">

          {/* table header */}
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

          {/* table contents and mapping */}
          <tbody>
            {TABLE_ROWS.map(({ id,name,username,email,school }, index) => {
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
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {username}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {school}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography as="a" variant="small" color="blue" className="font-medium">
                      View
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Delete">
                      <IconButton variant="text" color="blue-gray">
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
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