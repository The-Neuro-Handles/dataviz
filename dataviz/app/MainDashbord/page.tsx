'use client';
import { Card } from '@mui/joy';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import D3Example from '../../components/Plots/example'

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];




function MainDashbord() {
  return (
    <>
    <D3Example/>

    {/*<Masonry columns={4} spacing={2} >
    {heights.map((height, index) => (
      <>
      <Card key={index} variant="soft" sx={{height:height}}>
        <Example/>
        
      </Card>
      
      </>
    ))}
  </Masonry>*/}
 </>
  )
}

export default MainDashbord