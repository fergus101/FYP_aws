import React from 'react';
import { useState } from 'react';
import { cilPencil } from "@coreui/icons"
import CIcon from '@coreui/icons-react'
import { 
  CModal, 
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
} from '@coreui/react'
import { 
  Card, 
  CardBody, 
  Typography, 
  Tooltip, 
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import '../css/style.css';

const TABLE_HEAD = ["ID", "DRIVER ID", "NAME", "EMAIL", "LICENSE", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    driverid: "1024830",
    name: "Leox Gyasi",
    email: "l_gyasi@ctb.com",
    license: "S123748A",
  },

  {
    id: "02",
    driverid: "1023823",
    name: "Obi Wan Kenobi",
    email: "o_kenobi@ctb.com",
    license: "S126372B",
  },

  {
    id: "03",
    driverid: "10372947",
    name: "Anakin Skywalker",
    email: "a_skywalker@ctb.com",
    license: "S182539N",
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

// For future reference, how to pass unique ID into the <EditDriverAccountPencil>
// https://chat.openai.com/share/893b6bdf-ba5a-48d8-9b3d-e1ec434b7b80

export default function DriverTable() {
  // hooks for modal
  const [visible1, setVisible1] = useState(false) // for upload driver modal
  const [visible2, setVisible2] = useState(false) // for create driver modal
  const [visible3, setVisible3] = useState(false) // for update driver modal

  return (
  <>
    <div className="flex justify-between items-center mb-4">
      <p 
        className="font-bold mx-auto text-lg"
        style={{ fontSize: '20px', color: '#56844B', marginBottom: '10px', marginTop: '5px' }} >
        Driver Account Management
      </p>

      {/* Upload Driver Button */}
      <CButton 
        id='marsupiumbtn'
        onClick={() => setVisible1(!visible1)}
        style={buttoncolor}
        className="px-2 py-2" >
        Upload Driver
      </CButton>
      {/* Upload Driver Modal */}
      <CModal scrollable visible={visible1} onClose={() => setVisible1(false)} style={{marginTop: '40%', marginLeft: '14%'}}>
        <CContainer className='px-5 py-4 pb-5'>
        <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', fontSize: '15px'}}>Upload Driver</h1>
          <CFormLabel style={{marginTop: '10px'}}>Upload Driver CSV</CFormLabel>
          <CFormInput type="file" id="formFile"/>
          <div style={{marginTop: '40px'}}>
            <CButton style ={{'background': '#56844B', width: '100%'}}>
              Upload
            </CButton>
          </div>
        </CContainer> 
      </CModal>

      {/* Create Driver Button */}
      <div style={{marginLeft: '10px'}}>
        <CButton 
          id='marsupiumbtn'
          onClick={() => setVisible2(!visible2)}
          style={buttoncolor}
          className="px-2 py-2">
          Create Driver 
        </CButton>
      </div>
      {/* Create Driver Modal */}
      <CModal scrollable visible={visible2} style={{marginTop: '20%', marginLeft: '14%'}}>
        <CButton color="link" onClick={() => setVisible2(false)} style={{ marginLeft: 'auto' }}>X</CButton>
        <CContainer style={{paddingTop: '20px', paddingBottom: '10px'}}>
          <CForm className='overflow-auto'>
          <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', fontSize: '20px'}}>Create Driver</h1>
            <div className="mb-3">
                <CFormLabel>Driver ID</CFormLabel>
                <CFormInput id=""/>
            </div>
            <div className="mb-3">
                <CFormLabel>Name</CFormLabel>
                <CFormInput id=""/>
            </div>
            <div className="mb-3">
                <CFormLabel>Email</CFormLabel>
                <CFormInput id=""/>
            </div>
            <div className="mb-3">
                <CFormLabel>License</CFormLabel>
                <CFormInput id=""/>
            </div>
            <div className="py-2">
              <CButton style ={{'background': '#56844B', width: '100%', marginTop: '20px'}}>
                Create
              </CButton>
            </div>
          </CForm>
        </CContainer> 
      </CModal>
    </div>

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

          {/* Table rows */}
          <tbody>
            {TABLE_ROWS.map(({ id,driverid,name,email,license }, index) => {
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
                  {/* Edit Pencil Icon */}
                  <CIcon 
                  icon={cilPencil} 
                  onClick={() => setVisible3(!visible3)} />
                  <CModal scrollable visible={visible3} className= 'bg-light bg-opacity-10'>
                    <CButton color="link-black" onClick={() => setVisible3(false)} style={{ marginLeft: 'auto' }}>X</CButton>
                    <CContainer style={{padding: '10px'}}>
                      <CForm className='overflow-auto'>
                        <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', fontSize: '20px', marginTop: '15px', marginBottom: '10px'}}>Update Driver Details</h1>
                        <div className="mb-3">
                            <CFormLabel>Driver ID</CFormLabel>
                            <CFormInput id="driverid" value={driverid}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel>Name</CFormLabel>
                            <CFormInput id="name"></CFormInput>
                        </div>
                        <div className="mb-3">
                            <CFormLabel>Email</CFormLabel>
                            <CFormInput id="email"></CFormInput>
                        </div>
                        <div className="mb-3">
                            <CFormLabel>License</CFormLabel>
                            <CFormInput id="license"></CFormInput>
                        </div>
                        <div className="py-2">
                          <CButton style ={{'background': '#56844B', width: '100%', marginTop: '15px'}}>
                            Update
                          </CButton>
                        </div>
                      </CForm>
                    </CContainer>
                  </CModal>
                  </td>

                  {/* Delete user icon */}
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