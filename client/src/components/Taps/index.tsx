/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState, ReactNode } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import './style.css'
import BlogsContainer from '../BlogsContainer'
import { IBlogs } from '../../interfaces/IBlogs'

interface TabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps):JSX.Element => {
  const {
    children, value, index, ...other
  } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: number):{id:string;'aria-controls':string} => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const BasicTabs:FC<{blogs:IBlogs[]}> = ({ blogs }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number):void => {
    setValue(newValue)
  }

  return (
    <Box className="taps">
      <Box sx={{ borderBottom: 1, borderColor: '#0c1b49' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Blogs" {...a11yProps(0)} />
          <Tab label="Photos" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BlogsContainer blogs={blogs} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Photos
      </TabPanel>
    </Box>
  )
}

export default BasicTabs
