import React, { useState } from "react";
import { 
  CButton,
  CModal,
  CContainer,
  CForm,
  CFormInput, 
} from "@coreui/react";
import {
  Card,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from '@material-tailwind/react'
import { TrashIcon } from "@heroicons/react/24/solid";
import '../css/style.css'

const TABLE_HEAD = ["ID", "MESSAGE", "DATE", "", ""];

const TABLE_ROWS = [
  {
    id: "01",
    message: "Reminder: School photo day will be held on September 10th. Please ensure your child is dressed neatly and ready for the photo. Thank you!",
    dateposted: "24/08/2021"
  },
  {
    id: "02",
    message: "Attention parents: The school carnival has been rescheduled to October 5th due to inclement weather. We apologize for any inconvenience caused.",
    dateposted: "27/08/2021"
  },
  {
    id: "03",
    message: "Important notice: Parent-Teacher Conferences will take place on September 15th and 16th. Please check your child's backpack for sign-up sheets and appointment details.",
    dateposted: "28/08/2021"
  },
]

export default function AnnouncementTable() {
  const [visible, setVisible] = useState(false)

  // Probably best to include in CSS folder instead of here
  const buttoncolor = { 
    '--cui-btn-color': 'white',
    '--cui-btn-bg': '#56844B',
    '--cui-btn-border-color': 'transparent',
    '--cui-btn-hover-bg': '#56844B',
    '--cui-btn-hover-border-color': '#56844B',
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p 
          className="font-bold mx-auto text-lg"
          style={{ fontSize: '20px', color: '#56844B', paddingLeft: '17%' }} >
          School Announcements
        </p>

        {/* button for create announcement modal */}
        <CButton 
          id='marsupiumbtn'
          onClick={() => setVisible(!visible)}
          style={buttoncolor}
          className="px-3 py-2" >
          Create Announcement
        </CButton>

        {/* create announcement modal */}
        <CModal scrollable visible={visible} onClose={() => setVisible(false)} style={{marginTop: '40%', marginLeft: '14%'}}>
        <CContainer style={{padding: '15px'}}>
          <CForm className='overflow-auto'>
            <h1 style={{ color: '#56844B', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '20px'}}>Create Announcement</h1>
            
            <h1 style={{marginBottom: '5px'}}>Announcement message:</h1>
            <div className="mb-3">
                <CFormInput id="message" placeholder="Enter message here"/>
            </div>
            {/* add a date picker here */}
            <div className="py-2">
              <CButton style ={{'background': '#56844B', width: '100%'}}>
                Post
              </CButton>
            </div>
          </CForm>
        </CContainer> 
        </CModal>
      </div>

      {/* table for announcements */}
      <Card className="overflow-scroll h-full w-full">
        <CardBody style={{ padding: 0 }}>

          {/* table starts here */}
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
              {TABLE_ROWS.map(({ id, message, dateposted }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {id}
                      </Typography>
                    </td>
                    <td className={classes} >
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {message}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {dateposted}
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