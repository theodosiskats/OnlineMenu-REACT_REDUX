import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import Skeleton from '@mui/material/Skeleton'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Paper from '@mui/material/Paper'
import Draggable from 'react-draggable'

//DATA FETCHING
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, updateCategory, reset } from '../../../../redux/categories/categoriesSlice'
import { maxHeight, maxWidth } from '@mui/system'

// FIXME - Fix reloading and state updates on changing category
// Κρατάει τη τελευταία κατηγορία που άνοιξες και χρειάζεται
// refresh για να αδειάσει το state από τη προηγούμενη

//TabPanel Settings
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const screenHeight = window.innerHeight - 0.18 * window.innerHeight

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
    <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

export default function CategoryEdit() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [value, setValue] = useState(0)
  const [refreshData, setRefreshData] = useState(true)

  const { category, isLoading, isSuccess, isError, message } = useSelector((state) => state.categories)

  const [categoryData, setCategoryData] = useState({
    name: ``,
    description: ``,
  })
  const [image, setImage] = useState('')

  const [deleteImage, setDeleteImage] = useState('')
  const [isMounted, setIsMounted] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)

  // const handleClickOpenDialog = (filename) => {
  //   setOpenDialog(true)
  //   // console.log('filename', filename)
  // }

  const { name: InitialCategoryName, description: InitialCategoryDescription, image: categoryImage } = category

  useEffect(() => {
    if (isMounted) {
      dispatch(getCategory(id))
      if (isSuccess) {
        setCategoryData({ ...categoryData, name: InitialCategoryName, description: InitialCategoryDescription })
        setRefreshData(false)
        dispatch(reset())
      }
    }

    if (!isMounted) {
      if (isError) {
        toast.error('Ουπς, κάτι πήγε στραβά, ο server λέει: ' + message)
      }

      if (isSuccess) {
        setIsMounted(true)
        dispatch(reset())
        toast.success(`Η κατηγορία: ${categoryData.name} ενημερώθηκε επιτυχώς`)
      }
    }
    dispatch(reset())
  }, [dispatch, isMounted, refreshData])

  const onFileChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
  }

  const imageDelete = (e) => {
    console.log('Image delete API dispatch request')
  }

  const handleDeleteIconClicked = (img) => {
    return () => {
      setOpenDialog(true)
      setDeleteImage(img.filename)
      console.log('img.filename', img.filename)
    }
  }

  const clearImageStates = () => {
    setImage('')
    setDeleteImage('')
    setOpenDialog(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsMounted(false)
    const data = new FormData()
    if (image !== '') {
      data.append('image', image)
    }
    if (deleteImage !== '') {
      data.append('deleteImage', deleteImage)
    }
    data.append('name', categoryData.name)
    data.append('description', categoryData.description)
    const payload = { id, data }
    dispatch(updateCategory(payload))
    if (image !== '' || deleteImage !== '') clearImageStates()
    setRefreshData(true)
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
      <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered>
        <Tab label='Στοιχεία' {...Props(0)} />
        <Tab label='Φωτογραφίες' {...Props(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box
          sx={{
            m: 4,
          }}>
          <form fullWidth sx={{ width: '100%' }} onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ width: '100%' }} variant='standard'>
              <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
                <InputLabel htmlFor='name'>Ονομασία</InputLabel>
                <Input id='name' name='name' onChange={handleInputChange} value={`${categoryData.name}`} />
              </FormControl>

              <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
                <InputLabel htmlFor='description'>Περιγραφή (Προεραιτική)</InputLabel>
                <Input
                  id='description'
                  name='description'
                  onChange={handleInputChange}
                  value={`${categoryData.description}`}
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
                <Box
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Button variant='contained' color='success' style={{ textTransform: 'none' }} onClick={handleSubmit}>
                    Αποθήκευση
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </form>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {!categoryImage ? (
          <></>
        ) : (
          <ImageList sx={{ width: maxWidth, height: maxHeight }} cols={4}>
            {categoryImage.map((img) => (
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
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  position='top'
                  actionIcon={
                    <IconButton
                      sx={{ color: 'white' }}
                      onClick={handleDeleteIconClicked(img)}
                      aria-label={`star ${img.title}`}>
                      <ClearIcon sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                      {/* TODO - add onClick MUI confirmation dialog to delete image, then API request imagedelete */}
                    </IconButton>
                  }
                  actionPosition='left'
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <input
            accept='image/png,.jpeg'
            style={{ display: 'none' }}
            id='image'
            name='image'
            multiple
            type='file'
            onChange={onFileChange}
          />
          <label htmlFor='image'>
            <Button variant='contained' style={{ textTransform: 'none' }}>
              Ανεβάστε Φωτογραφία
            </Button>
          </label>
        </Box>
      </TabPanel>

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
            Είσαι σίγουρος ότι θες να διαγράψης την επιλεγμένη φωτογραφία;{'/n'}Η κίνηση αυτή είναι μη αντιστρέψιμη.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog}>
            Ακύρωση
          </Button>
          <Button color='error' onClick={handleSubmit}>
            Διαγραφή
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
