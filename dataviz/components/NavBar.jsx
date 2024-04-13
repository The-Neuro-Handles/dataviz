"use client";
import React,{ useState } from 'react'
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Card } from '@mui/material';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';


function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <nav className="overscroll-y-none	bg-gray-950 h-screen">
    <Box sx={{ width: 200, 
    boxShadow: 1,
    color: 'black',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    padding: '1rem',
    }}>
      <Card className='flex justify-center w-full py-1'>
        <Typography 
        level='h6'
        startDecorator={<DataThresholdingIcon />}
        >wAISum</Typography>
      </Card>
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },
          '--List-insetStart': '32px',
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': '21px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',
          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem nested>
          <ListItem component="div" startAction={<DashboardIcon />}>
            <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
              Dashboard
            </Typography>
          </ListItem>
          <List sx={{ '--List-gap': '0px' }}>
            <ListItem>
              <ListItemButton selected>Overview</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ '--List-gap': '0px' }}>
          <ListItemButton>Quick Start</ListItemButton>
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Tutorial
            </Typography>
            <Typography component="span" level="body-xs">
              9
            </Typography>
          </ListItem>
          {open && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Overview</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  0. Set Up Your Development Environment
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  1. Create and Deploy Your First Gatsby Site
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>2. Use and Style React components</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen2((bool) => !bool)}
            >
              <KeyboardArrowDown
                sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open2 ? 'bold' : undefined,
                color: open2 ? 'text.primary' : 'inherit',
              }}
            >
              How-to Guides
            </Typography>
            <Typography component="span" level="body-xs">
              39
            </Typography>
          </ListItem>
          {open2 && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Overview</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Local Development</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Routing</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Styling</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
    </nav>
  )
}

export default NavBar