import { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
//DATA FETCHING
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createCategory,
  reset,
} from '../../../redux/categories/categoriesSlice'

//FIXME - fix image to state upload
export default function NewCategory() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
  })
  const [image, setImage] = useState('')
  const [imageName, setImageName] = useState('')
  const [uploading, setUploading] = useState(false)

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.categories
  )

  const [isMounted, setIsMounted] = useState(true)


  useEffect(() => {
    if(!isMounted){
      if (isError) {
        toast.error('Ουπς, κάτι πήγε στραβά, ο σέρβερ λέει: ' + message )
      }
  
      if (isSuccess) {
        setIsMounted(true)
        dispatch(reset())
        toast.success(`Η κατηγορία: ${categoryData.name} δημιουργήθηκε επιτυχώς`)
        navigate('/dashboard/categories')
      }
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
  }

  const onFileChange = (e) => {
    setImage(e.target.files[0])
    setImageName(e.target.files[0].name)
    console.log('image', image, imageName)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsMounted(false)
    const payload = new FormData()
    payload.append('image', image)
    payload.append('name', categoryData.name)
    payload.append('description', categoryData.description)
    dispatch(createCategory(payload))
  }

  if (isLoading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress className='spinner' />
      </Box>
    )

  return (
    <div>
      <Box
        sx={{
          m: 4,
        }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ width: '100%' }} variant='standard'>
            <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
              <InputLabel htmlFor='name'>Ονομασία</InputLabel>
              <Input id='name' name='name' onChange={handleChange} />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
              <TextField
                id='description'
                name='description'
                label='Περιγραφή (Προαιρετικό)'
                multiline
                rows={2}
                defaultValue=''
                variant='standard'
                onChange={handleChange}
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
                <Button variant='contained' component='span'>
                  Ανεβάστε Φωτογραφία
                </Button>
              </label>
              <Button
                variant='contained'
                color='success'
                style={{ textTransform: 'none' }}
                onClick={handleSubmit}>
                Δημοσίευση
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </div>
  )
}
