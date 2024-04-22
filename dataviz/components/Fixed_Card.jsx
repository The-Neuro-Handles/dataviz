'use client';
import * as React from 'react'
import Card from '@mui/joy/Card';

import IconButton from '@mui/joy/IconButton';
import AllOutIcon from '@mui/icons-material/AllOut';

import Modal from '@mui/joy/Modal';

export default function Fixed_Card({children}) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
      }}
      
    >
        <div className='flex justify-center w-full py-1'>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          onClick={() => {setOpen(!open)}}
        >
          <AllOutIcon />
        </IconButton>
        </div>
        
        
        {children}
        
    </Card>
    <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Card
        data-resizable
        sx={{
            textAlign: 'center',
            alignItems: 'center',
            minWidth: '50%',
            maxWidth: '80%',
            minHeight: '50%',
            maxHeight: '80%',
            overflow: 'auto',
            resize: 'both',
        }}
        
        >
            <div className='flex justify-center w-full py-1'>
            <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            onClick={() => {setOpen(!open)}}
            >
            <AllOutIcon />
            </IconButton>
            </div>
            
            
            {children}
            
        </Card>
    </Modal>
    </React.Fragment>
  )
}