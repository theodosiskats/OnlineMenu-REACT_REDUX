import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import { useParams } from 'react-router-dom'

//DATA FETCHING
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, reset } from '../../../redux/categories/categoriesSlice'

//TabPanel Settings
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function Props(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

//End of TabPanel Settings

export default function BasicTabs() {
  const dispatch = useDispatch()
  const id = useParams().id
  const [value, setValue] = useState(0)

  const { category, isLoading, isSuccess } = useSelector(
    (state) => state.categories
  )

  const {name, description, image} = category

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getCategory(id))
  }, [dispatch])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered>
          <Tab label='Στοιχεία' {...Props(0)} />
          <Tab label='Φωτογραφίες' {...Props(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {name}<br></br>
        {description}
        {/* <img
          src={category.image[0] ? category.image[0].url : ''}
          alt=''
        /> */}
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  )
}
