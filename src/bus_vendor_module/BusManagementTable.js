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

const TABLE_HEAD = ["ID", "BUS PLATE", "CAPACITY", "TYPE", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    busplate: "B19363B",
    capacity: "50",
    type: "Large bus",
  },
  {
    id: "02",
    busplate: "B98765A",
    capacity: "50",
    type: "Large bus",
  },
  {
    id: "03",
    busplate: "B23456C",
    capacity: "15",
    type: "Mini bus",
  },
  {
    id: "04",
    busplate: "B54321D",
    capacity: "20",
    type: "Mini bus",
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

export default function DriverTable() {
  // hooks for modal
  const [visible1, setVisible1] = useState(false) // for upload bus modal
  const [visible2, setVisible2] = useState(false) // for create bus modal

  return (
  <>
    <div className="flex justify-between items-center mb-4">
      <p 
        className="font-bold mx-auto text-lg"
        style={{ fontSize: '20px', color: '#56844B', marginBottom: '10px', marginTop: '5px' }} >
        Bus Management
      </p>

      {/* Upload Bus Button */}
      <CButton 
        id='marsupiumbtn'
        onClick={() => setVisible1(!visible1)}
        style={buttoncolor}
        className="px-2 py-2" >
        Upload Bus
      </CButton>
      {/* Upload Bus Modal */}
      <CModal scrollable visible={visible1} onClose={() => setVisible1(false)} style={{marginTop: '40%', marginLeft: '14%'}}>
        <CContainer className='px-5 py-4 pb-5'>
        <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', fontSize: '15px'}}>Upload Bus Details</h1>
          <CFormLabel style={{marginTop: '10px'}}>Upload Bus CSV</CFormLabel>
          <CFormInput type="file" id="formFile"/>
          <div style={{marginTop: '40px'}}>
            <CButton style ={{'background': '#56844B', width: '100%'}}>
              Upload
            </CButton>
          </div>
        </CContainer> 
      </CModal>

      {/* Create Bus Button */}
      <div style={{marginLeft: '10px'}}>
        <CButton 
          id='marsupiumbtn'
          onClick={() => setVisible2(!visible2)}
          style={buttoncolor}
          className="px-2 py-2">
          Create Bus 
        </CButton>
      </div>
      {/* Create Bus Modal */}
      <CModal scrollable visible={visible2} style={{marginTop: '20%', marginLeft: '14%'}}>
        <CButton color="link" onClick={() => setVisible2(false)} style={{ marginLeft: 'auto' }}>X</CButton>
        <CContainer style={{paddingTop: '20px', paddingBottom: '10px'}}>
          <CForm className='overflow-auto'>
          <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', fontSize: '20px'}}>Create Bus</h1>
            <div className="mb-3">
              <CFormLabel>Bus Plate</CFormLabel>
              <CFormInput id=""/>
            </div>
            <div className="mb-3">
              <CFormLabel>Capacity</CFormLabel>
              <CFormInput id=""/>
            </div>
            <div className="mb-3">
              <CFormLabel>Bus Type</CFormLabel>
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
            {TABLE_ROWS.map(({ id,busplate,capacity,type }, index) => {
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
                      {busplate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {capacity}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {type}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {/* Edit Pencil Icon */}
                    <CIcon icon={cilPencil} />
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