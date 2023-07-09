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
import '../css/style.css';
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

const TABLE_HEAD = ["ID", "FULL NAME", "USERNAME", "EMAIL", "FORM CLASS", "GATE", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    fullname: "Avar Kriss",
    username: "gvps_kriss",
    email: "a_kriss@moe.edu.sg",
    formclass: "1 Empathy",
    gate: "West Gate",
  },
  {
    id: "02",
    fullname: "Belle Turner",
    username: "gvps_belle",
    email: "b_turner@moe.edu.sg",
    formclass: "2 Harmony",
    gate: "North Gate",
  },
  {
    id: "03",
    fullname: "Caleb Reed",
    username: "gvps_caleb",
    email: "c_reed@moe.edu.sg",
    formclass: "3 Trust",
    gate: "East Gate",
  },
  {
    id: "04",
    fullname: "Daisy Martinez",
    username: "gvps_daisy",
    email: "d_martinez@moe.edu.sg",
    formclass: "4 Empathy",
    gate: "South Gate",
  },
  {
    id: "05",
    fullname: "Ethan Watson",
    username: "gvps_ethan",
    email: "e_watson@moe.edu.sg",
    formclass: "5 Harmony",
    gate: "West Gate",
  },
  {
    id: "06",
    fullname: "Fiona Turner",
    username: "gvps_fiona",
    email: "f_turner@moe.edu.sg",
    formclass: "6 Trust",
    gate: "North Gate",
  },
  {
    id: "07",
    fullname: "Gavin Harris",
    username: "gvps_gavin",
    email: "g_harris@moe.edu.sg",
    formclass: "1 Trust",
    gate: "East Gate",
  },
  {
    id: "08",
    fullname: "Hannah Smith",
    username: "gvps_hannah",
    email: "h_smith@moe.edu.sg",
    formclass: "2 Empathy",
    gate: "South Gate",
  },
  {
    id: "09",
    fullname: "Isaac Reed",
    username: "gvps_isaac",
    email: "i_reed@moe.edu.sg",
    formclass: "3 Harmony",
    gate: "West Gate",
  },
  {
    id: "10",
    fullname: "Jasmine Lee",
    username: "gvps_jasmine",
    email: "j_lee@moe.edu.sg",
    formclass: "4 Trust",
    gate: "North Gate",
  },
  {
    id: "11",
    fullname: "Kevin Turner",
    username: "gvps_kevin",
    email: "k_turner@moe.edu.sg",
    formclass: "5 Empathy",
    gate: "East Gate",
  },
  {
    id: "12",
    fullname: "Lily Martinez",
    username: "gvps_lily",
    email: "l_martinez@moe.edu.sg",
    formclass: "6 Harmony",
    gate: "South Gate",
  },
  {
    id: "13",
    fullname: "Mason Walker",
    username: "gvps_mason",
    email: "m_walker@moe.edu.sg",
    formclass: "1 Empathy",
    gate: "West Gate",
  },
  {
    id: "14",
    fullname: "Nora Harris",
    username: "gvps_nora",
    email: "n_harris@moe.edu.sg",
    formclass: "2 Harmony",
    gate: "North Gate",
  },
  {
    id: "15",
    fullname: "Oliver Smith",
    username: "gvps_oliver",
    email: "o_smith@moe.edu.sg",
    formclass: "3 Trust",
    gate: "East Gate",
  },
  {
    id: "16",
    fullname: "Penelope Reed",
    username: "gvps_penelope",
    email: "p_reed@moe.edu.sg",
    formclass: "4 Empathy",
    gate: "South Gate",
  },
  {
    id: "17",
    fullname: "Quinn Watson",
    username: "gvps_quinn",
    email: "q_watson@moe.edu.sg",
    formclass: "5 Harmony",
    gate: "West Gate",
  },
  {
    id: "18",
    fullname: "Ryan Turner",
    username: "gvps_ryan",
    email: "r_turner@moe.edu.sg",
    formclass: "6 Trust",
    gate: "North Gate",
  },
  {
    id: "19",
    fullname: "Samantha Harris",
    username: "gvps_samantha",
    email: "s_harris@moe.edu.sg",
    formclass: "1 Trust",
    gate: "East Gate",
  },
  {
    id: "20",
    fullname: "Tyler Smith",
    username: "gvps_tyler",
    email: "t_smith@moe.edu.sg",
    formclass: "2 Empathy",
    gate: "South Gate",
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

export default function TeacherTable() {
  // hooks for modal
  const [visible1, setVisible1] = useState(false) // for upload teacher modal
  const [visible2, setVisible2] = useState(false) // for create teacher modal
  const [visible3, setVisible3] = useState(false) // for update teacher modal

  // hooks for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;  // number of rows to display
  const startIndex = (currentPage - 1) * rowsPerPage;

  // hook for search
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p 
          className="font-bold mx-auto text-lg"
          style={{ fontSize: '20px', color: '#56844B', paddingLeft: '23%'}} >
          Teacher User Accounts
        </p>

        {/* Upload Teacher Accounts Button */}
        <CButton 
          id='marsupiumbtn'
          onClick={() => setVisible1(!visible1)}
          style={buttoncolor}
          className="px-2 py-2" >
          Upload Teachers
        </CButton>
        {/* Upload Teacher Accounts Modal */}
        <CModal scrollable visible={visible1} onClose={() => setVisible1(false)} style={{marginTop: '40%', marginLeft: '14%'}}>
          <CContainer className='px-5 py-4 pb-5'>
          <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', fontSize: '15px'}}>Upload Teacher Details</h1>
            <CFormLabel htmlFor="formFile" style={{marginTop: '10px'}}>Upload Teachers CSV</CFormLabel>
            {/* Input for file */}
            <CFormInput type="file" id="formFile"/>
            <div style={{marginTop: '40px'}}>
              <CButton style ={{'background': '#56844B', width: '100%'}}>
                Submit
              </CButton>
            </div>
          </CContainer> 
        </CModal>
        
        {/* Create Teacher Account Button */}
        <div style={{marginLeft: '10px'}}>
          <CButton 
            id='marsupiumbtn'
            onClick={() => setVisible2(!visible2)}
            style={buttoncolor}
            className="px-2 py-2">
            Create Teacher 
          </CButton>
        </div>
        {/* Create Teacher Account Modal */}
        <CModal scrollable visible={visible2} onClose={() => setVisible2(false)} style={{marginTop: '20%', marginLeft: '14%'}}>
          <CContainer style={{paddingTop: '20px', paddingBottom: '10px'}}>
            <CForm className='overflow-auto'>
            <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', fontSize: '20px'}}>Create Teacher Account</h1>
              {/* Input for details */}
              <div className="mb-3">
                  <CFormLabel>Full name</CFormLabel>
                  <CFormInput id=""/>
              </div>
              <div className="mb-3">
                  <CFormLabel>Username</CFormLabel>
                  <CFormInput id=""/>
              </div>
              <div className="mb-3">
                  <CFormLabel>Email</CFormLabel>
                  <CFormInput id=""/>
              </div>
              <div className="mb-3">
                  <CFormLabel>Form class</CFormLabel>
                  <CFormInput id=""/>
              </div>
              <div className="mb-3">
                  <CFormLabel>Gate Assignment</CFormLabel>
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

      {/* Search box */}
      <div className='px-5 py-3'>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Teachers Name"
        />
      </div>

      {/* Teacher Accounts Overview Table */}
      <Card className="overflow-scroll h-full w-full">
        {/* Table header and row */}
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
              .map(({ id,fullname,username,email,formclass,gate }, index) => {
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
                        {fullname}
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
                        {formclass}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {gate}
                      </Typography>
                    </td>

                    {/* edit teacher details*/}
                    <td className={classes}>
                    <CIcon 
                    icon={cilPencil} 
                    onClick={() => setVisible3(!visible3)} />
                    
                    <CModal scrollable visible={visible3} onClose={() => setVisible3(false)}
                      className= 'bg-light bg-opacity-10'>
                      <CContainer style={{padding: '10px'}}>
                        <CForm className='overflow-auto'>
                          <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', fontSize: '20px', marginTop: '15px', marginBottom: '10px'}}>Update Teacher Details</h1>

                          <div className="mb-3">
                              <CFormLabel htmlFor="name">Name</CFormLabel>
                              <CFormInput id="name" value={name}/>
                          </div>

                          <div className="mb-3">
                              <CFormLabel htmlFor="email">Email</CFormLabel>
                              <CFormInput id="email" value={email}/>
                          </div>

                          <div className="mb-3">
                              <CFormLabel htmlFor="class">Form class</CFormLabel>
                              <CFormInput id="class" value={formclass}/>
                          </div>

                          <div className="mb-3">
                              <CFormLabel htmlFor="gate" >Gate</CFormLabel>
                              <CFormInput id="gate" value={gate}/>
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

                  {/* delete teacher details */}
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