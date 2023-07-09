import React from 'react';
import { useState } from 'react';
import { cilPencil } from "@coreui/icons"
import CIcon from '@coreui/icons-react'
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
  CardFooter,
  Button,
  Typography,
  Tooltip,
  IconButton,
  Input,
} from '@material-tailwind/react'
import { TrashIcon } from "@heroicons/react/24/solid";
import '../css/style.css';


const TABLE_HEAD = ["USERID", "NAME", "FORM CLASS", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    fullname: "Janine",
    formclass: "1 Honesty",
  },
  {
    id: "02",
    fullname: "Emma",
    formclass: "3 Respect",
  },
  {
    id: "03",
    fullname: "Benjamin",
    formclass: "2 Honesty",
  },
  {
    id: "04",
    fullname: "Oliver",
    formclass: "2 Respect",
  },
  {
    id: "05",
    fullname: "Sophia",
    formclass: "1 Honesty",
  },
  {
    id: "06",
    fullname: "Lucas",
    formclass: "3 Honesty",
  },
  {
    id: "07",
    fullname: "Isabella",
    formclass: "2 Respect",
  },
  {
    id: "08",
    fullname: "William",
    formclass: "1 Honesty",
  },
  {
    id: "09",
    fullname: "Elijah",
    formclass: "3 Respect",
  },
  {
    id: "10",
    fullname: "Mia",
    formclass: "2 Honesty",
  },
  {
    id: "11",
    fullname: "James",
    formclass: "1 Respect",
  },
  {
    id: "12",
    fullname: "Harper",
    formclass: "3 Honesty",
  },
  {
    id: "13",
    fullname: "Benjamin",
    formclass: "2 Respect",
  },
  {
    id: "14",
    fullname: "Amelia",
    formclass: "1 Honesty",
  },
  {
    id: "15",
    fullname: "Henry",
    formclass: "3 Respect",
  },
  {
    id: "16",
    fullname: "Charlotte",
    formclass: "2 Honesty",
  },
  {
    id: "17",
    fullname: "Alexander",
    formclass: "1 Respect",
  },
  {
    id: "18",
    fullname: "Ava",
    formclass: "3 Honesty",
  },
  {
    id: "19",
    fullname: "Daniel",
    formclass: "2 Respect",
  },
  {
    id: "20",
    fullname: "Liam",
    formclass: "1 Honesty",
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

export default function StudentTable() {
  // hooks for modal
  const [visible1, setVisible1] = useState(false) // for upload student modal
  const [visible2, setVisible2] = useState(false) // for create student modal
  const [visible3, setVisible3] = useState(false) // for update student modal

  // hooks for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;  // number of rows to display
  const startIndex = (currentPage - 1) * rowsPerPage;

  // hook for search
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p 
          className="font-bold mx-auto text-lg"
          style={{ fontSize: '20px', color: '#56844B', paddingLeft: '23%'}} >
          Student User Accounts
        </p>

        {/* Upload Student Accounts Button */}
        <CButton 
          id='marsupiumbtn'
          onClick={() => setVisible1(!visible1)}
          style={buttoncolor}
          className="px-2 py-2" >
          Upload Student
        </CButton>
        {/* Upload Student Accounts Modal */}
        <CModal scrollable visible={visible1} onClose={() => setVisible1(false)} style={{marginTop: '40%', marginLeft: '14%'}}>
          <CContainer className='px-5 py-4 pb-5'>
          <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', fontSize: '15px'}}>Upload Student Details</h1>
            <CFormLabel htmlFor="formFile" style={{marginTop: '10px'}}>Upload Student CSV</CFormLabel>
            {/* Input for file */}
            <CFormInput type="file" id="formFile"/>
            <div style={{marginTop: '40px'}}>
              <CButton style ={{'background': '#56844B', width: '100%'}}>
                Submit
              </CButton>
            </div>
          </CContainer> 
        </CModal>
        
        {/* Create Student Account Button */}
        <div style={{marginLeft: '10px'}}>
          <CButton 
            id='marsupiumbtn'
            onClick={() => setVisible2(!visible2)}
            style={buttoncolor}
            className="px-2 py-2">
            Create Student 
          </CButton>
        </div>
        {/* Create Student Account Modal */}
        <CModal scrollable visible={visible2} onClose={() => setVisible2(false)} style={{marginTop: '20%', marginLeft: '14%'}}>
          <CContainer style={{paddingTop: '20px', paddingBottom: '10px'}}>
            <CForm className='overflow-auto'>
            <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', fontSize: '20px'}}>Create Student Account</h1>
              {/* Input for details */}
              <div className="mb-3">
                  <CFormLabel htmlFor="username">Full name</CFormLabel>
                  <CFormInput id="username"/>
              </div>
              <div className="mb-3">
                  <CFormLabel htmlFor="school">Form Class</CFormLabel>
                  <CFormInput id="school"/>
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

      {/* Search box */}
      <div className='px-5 py-3'>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Students Name"
        />
      </div>

      {/* Student Accounts Overview Table */}
      <Card className="overflow-scroll h-full w-full">
        {/* Table header and rows */}
        <CardBody style={{ padding: 0 }}>
          <table className="w-full min-w-max table-auto text-left">
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
            <tbody> 
              {TABLE_ROWS
              // .filter for real time search query
              .filter((row) => row.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
              // .slice for pagination
              .slice(startIndex, startIndex + rowsPerPage)
              // .map for displaying row data
              .map(({ id, fullname, formclass }, index) => {
                const isLast = index === rowsPerPage - 1;
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
                        {fullname}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {formclass}
                      </Typography>
                    </td>
                    {/* edit student details icon */}
                    <td className={classes}>
                      <CIcon 
                        icon={cilPencil} 
                        onClick={() => setVisible3(!visible3)} 
                      />
                      {/* edit student details modal */}
                      <CModal scrollable visible={visible3} onClose={() => setVisible3(false)}
                        className= 'bg-light bg-opacity-10'>
                        <CContainer style={{padding: '10px'}}>
                          <CForm className='overflow-auto'>
                            <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', fontSize: '20px', marginTop: '15px', marginBottom: '10px'}}>Update Student Details</h1>
                            <div className="mb-3">
                                <CFormLabel>Name</CFormLabel>
                                <CFormInput id="name" value={fullname}/>
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Form class</CFormLabel>
                                <CFormInput id="class" value={formclass}/>
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
                    {/* delete student details */}
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

        {/* Table footer with pagination */}
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button 
          variant="outlined" color="blue-gray" 
          size="sm" disabled={currentPage === 1} 
          onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from(Array(Math.ceil(TABLE_ROWS.length / rowsPerPage)).keys()).map((page) => (
            <IconButton
              key={page + 1} variant={currentPage === page + 1 ? "outlined" : "text"}
              color="blue-gray" size="sm"
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="outlined" color="blue-gray"
          size="sm" disabled={currentPage === Math.ceil(TABLE_ROWS.length / rowsPerPage)}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>

        </CardFooter>
      </Card>
    </>
  )
}