import React from 'react'
import {
  Card,
  CardBody,
  Typography,
  CardHeader,
  Button,
} from '@material-tailwind/react'
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import '../css/style.css'
import DefaultSchoolLogo from '../assets/images/schoollogo.jpg'

// A table from database that contains pickup information
// The date stored in our db should follow the date string below
const PICKUP = [
  {
    id: "01",
    date: "03 July 2023", 
    number: "15",
    time: "1335",
    schoolid: "05",
    schoolname: "Admiralty Primary School",
    assignedbusvendorid: "99",
    assignedbusdriverid: "10",
    assignedbusdrivername: "LEOX GYASI",
    assignedbusdriverlicense: "B19363B"
  },

]

export default function DashboardBusVendor() {
  // Get today's date in the format "DD-Month-YYYY"
  const today = new Date().toLocaleDateString('en-UK', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Find the pickup object with today's date
  const todayPickup = PICKUP.find(pickup => pickup.date === today);

  return (
    <>
      <div>
        <p style={{color: '#56844B', fontWeight: 'bold'}}>Welcome, Bus Vendor Elzar Mann</p> 
      </div>

      <div style={{marginTop: '30px', color: '#5c5c5c'}}>
        Coolidge Trucks & Buses has been assigned to: 
      </div>

      {/* School information card */}
      <Card className="flex-row w-full max-w-[48rem]" style={{marginTop: '15px'}}>
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img src={DefaultSchoolLogo} alt="image"  style={{marginLeft: '10%'}}/>
        </CardHeader>
        <CardBody style={{marginTop: '25px'}}>
          <Typography variant="h4" color="blue-gray" className="mb-2">Admiralty Primary School</Typography>
          <Typography color="gray" className="font-normal">
            Address: 11 Woodlands Cir, Singapore 738907
          </Typography>
          <Typography color="gray" className="font-normal mb-4">
            Contact: 6372 9372
          </Typography>
          <a href="" className="inline-block" >
            <Button variant="text" className="flex gap-2" style={{paddingLeft: '0px'}}>
              View more information 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>

      {/* Assignment information */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', color: '#5c5c5c'}}>
        <div>
          <p>Students opted in for pickup today</p>
          {/* Need to add && operator later, to make the ternary below check for matching vendor id + today's pickupdate */}
          {/* todayPickup && todayPickup.assignedbusvendorid === "XYZ"  ?  ( */}
          {todayPickup ? (
              <p>{todayPickup.number}</p>
            ) : ( <p>No pickup information for today</p> )
          }
          <br/>
          <p>Dismissal time for today, {today}</p>
          {todayPickup ? (
              <p>{todayPickup.time}</p>
            ) : ( <p>No pickup information for today</p> )
          }
        </div>
        
        <div>
          <p>Drivers assigned for today</p>
          {todayPickup ? (
            <>
              <p>{todayPickup.assignedbusdrivername}</p>
              <p>{todayPickup.assignedbusdriverlicense}</p>
            </>
            ) : ( <p>No pickup information for today</p> )
          }          
        </div>
      </div>
    </>
  )
}