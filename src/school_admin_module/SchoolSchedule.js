import React from 'react';
import { useState } from 'react';
import {
  CButton,
  CModal,
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,

} from '@coreui/react'
import {
  Card,
  CardBody,
  Typography,
  Tooltip,
  IconButton,

} from '@material-tailwind/react'
import { cilPencil } from "@coreui/icons"
import CIcon from '@coreui/icons-react'
import '../css/style.css';

const TABLE_HEAD = ["ID", "YEAR", "STATUS", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    year: "Primary 1",
    status: "Uploaded",
  },
  {
    id: "02",
    year: "Primary 2",
    status: "Uploaded",
  },
  {
    id: "03",
    year: "Primary 3",
    status: "Not Uploaded",
  },
  {
    id: "04",
    year: "Primary 4",
    status: "Not Uploaded",
  },
  {
    id: "05",
    year: "Primary 5",
    status: "Not Uploaded",
  },
  {
    id: "06",
    year: "Primary 6",
    status: "Not Uploaded",
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

export default function SchoolSchedule() {
  // hook for modal
  const [visible, setVisible] = useState(false) // for upload schedule modal

  return (
  <>
    <div className="flex justify-between items-center mb-4">
      <p 
        className="font-bold mx-auto text-lg"
        style={{ fontSize: '20px', color: '#56844B', paddingLeft: '17%'}} 
      >
      School Year Schedule
      </p>
      
      {/* Upload schedule */}
      <CButton 
        id='marsupiumbtn'
        onClick={() => setVisible(!visible)}
        style={buttoncolor}
        className="px-5 py-2"
        >
        Upload Schedule
      </CButton>
      {/* Modal for upload schedule */}
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CContainer className='px-5 py-4 pb-5'>
        <CForm>
          <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', fontSize: '15px'}}>Upload Schedule</h1>
            <CFormLabel htmlFor="formFile" style={{marginTop: '10px'}}>Upload Schedule</CFormLabel>
            {/* Input for file */}
            <CFormInput type="file" id="formFile"/>
            <CFormLabel htmlFor="formFile" style={{marginTop: '10px'}}>Year</CFormLabel>
            {/* Input for year */}
            <CFormInput type="text" id="formYear"/>
            {/* Submit button */}
            <div style={{marginTop: '40px'}}>
              <CButton style ={{'background': '#56844B', width: '100%'}}>
                Upload
              </CButton>
            </div>
        </CForm>
        </CContainer> 
      </CModal>
    </div>
    
    {/* Table for displaying schedule */}
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
            {TABLE_ROWS.map(({ id,year,status }, index) => {
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
                      {year}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {status}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <CIcon 
                      icon={cilPencil} 
                    />
                  </td>
                  <td className={classes}>
                    <Typography as="a" variant="small" className="font-medium">
                      View
                    </Typography>
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