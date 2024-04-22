'use client';
import * as React from 'react'
import Card from '@mui/joy/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export default function Fixed_Card({children}) {
  
 
  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
      }}
      
    >
        <IconButton aria-label="delete">
            <DeleteIcon />
        </IconButton>
        <main>
        {children}
        </main>
    </Card>
  )
}