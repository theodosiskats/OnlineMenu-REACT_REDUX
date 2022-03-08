import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ClearIcon from '@mui/icons-material/Clear'
import Checkbox from '@mui/material/Checkbox'
import Skeleton from '@mui/material/Skeleton'
import CircularProgress from '@mui/material/CircularProgress'
import CardMedia from '@mui/material/CardMedia'
import FormHelperText from '@mui/material/FormHelperText'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Paper from '@mui/material/Paper'
import Draggable from 'react-draggable'

//DATA FETCHING
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, reset } from '../../../redux/categories/categoriesSlice'
import { maxHeight, maxWidth } from '@mui/system'

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

function PaperComponent(props) {
  return (
    <Draggable
      handle='#draggable-dialog-title'
      cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

export default function CategoryEdit() {
  const dispatch = useDispatch()
  const id = useParams().id
  const [value, setValue] = useState(0)

  const { category, isLoading, isSuccess } = useSelector(
    (state) => state.categories
  )

  const [categoryData, setCategoryData] = useState({
    name: ``,
    description: ``,
  })

  const [openDialog, setOpenDialog] = useState(false)

  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const { name, description, image } = category

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

  const handleInputChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = new FormData()
    payload.append('image', image)
    payload.append('name', categoryData.name)
    payload.append('description', categoryData.description)
    console.log(payload)
    dispatch(createCategory(payload))
  }

  const deleteImage = (e) => {
    console.log('Image delete API dispatch request')
  }

  if (isLoading) {
    return (
      <div className=''>
        <Skeleton animation='wave' />
      </div>
    )
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
        <div>
          <Box
            sx={{
              m: 4,
            }}>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth sx={{ width: '100%' }} variant='standard'>
                <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
                  <InputLabel htmlFor='name'>Ονομασία</InputLabel>
                  <Input
                    focused
                    id='name'
                    name='name'
                    onChange={handleInputChange}
                    value={`${name}`}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
                <InputLabel htmlFor='description'>Περιγραφή (Προεραιτική)</InputLabel>
                  <Input
                    focused
                    id='description'
                    name='description'
                    onChange={handleInputChange}
                    value={`${description}`}
                  />
                </FormControl>
              </FormControl>

              <FormControl sx={{ mt: 5 }} variant='standard'>
                <Box
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {/* FIXME - Fix justifyContent space-between to spread buttons to the edges */}
                  <Button
                    variant='contained'
                    color='success'
                    style={{ textTransform: 'none' }}
                    onClick={handleSubmit}>
                    Αποθήκευση
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Box>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {!image ? <></> : 
          <ImageList sx={{ width: maxWidth, height: maxHeight }} cols={4}>
          {image.map((img) => (
            <ImageListItem key={img.filename}>
              <img
                src={`${img.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={img.filename}
                loading='lazy'
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                position='top'
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${img.title}`}>
                    <ClearIcon
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                      onClick={handleClickOpenDialog}
                    />
                    {/* TODO - add onClick MUI confirmation dialog to delete image, then API request imagedelete */}
                  </IconButton>
                }
                actionPosition='left'
              />
            </ImageListItem>
          ))}
        </ImageList>
        }
        
        
      </TabPanel>

      
      <div>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperComponent={PaperComponent}
          aria-labelledby='draggable-dialog-title'>
          <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
            Επιβεβαίωση
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Είσαι σίγουρος ότι θες να διαγράψης την επιλεγμένη φωτογραφία;{'/n'}
              Η κίνηση αυτή είναι μη αντιστρέψιμη.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseDialog}>
              Ακύρωση
            </Button>
            <Button color="error" onClick={deleteImage}>Διαγραφή</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  )
}
