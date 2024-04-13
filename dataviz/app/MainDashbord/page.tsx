'use client';
import { Card } from '@mui/joy';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];




function MainDashbord() {
  return (
    <>
    {/* <div className="grid grid-rows-3 grid-flow-col gap-4 w-full p-2">
      <Card  variant="soft" className="row-span-3 h-1/2">01</Card>
      <Card  variant="soft" className="col-span-2">02</Card>
      <Card  variant="soft" className="row-span-2 h-1/4 col-span-2 ">03</Card>
    </div> */}
    <Masonry columns={4} spacing={2} >
    {heights.map((height, index) => (
      <>
      <Card key={index} variant="soft" sx={{height:height}}>01</Card>
      </>
    ))}
  </Masonry>
 </>
  )
}

export default MainDashbord