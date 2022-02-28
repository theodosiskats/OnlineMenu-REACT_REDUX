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
//DATA FETCHING
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../../redux/categories/categoriesActions'

//TODO - fix image to state upload
export default function NewCategory() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)
  
  // TODO - IMAGE UPLOAD METHOD MAYBE?
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createCategory({name, description}))
  }

  return (
    <>
        <Box
          sx={{
            m: 4,
          }}>
          <div>
            <FormControl fullWidth sx={{ width: '100%' }} variant='standard'>
              <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
                <InputLabel htmlFor='name'>
                  Ονομασία
                </InputLabel>
                <Input
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
                <TextField
                  id='description'
                  label='Περιγραφή (Προαιρετικό)'
                  multiline
                  rows={2}
                  defaultValue=''
                  variant='standard'
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </FormControl>

            <FormControl sx={{ mt: 5 }} variant='standard'>
              <Box sx={{ display: 'flex', flexGrow: 1, alignSelf: 'center', justifyContent: 'space-between'}}>
                {/* TODO - Fix justifyContent space-between to spread buttons to the edges */}
                <input
                  accept='image/png,.jpeg'
                  style={{ display: 'none' }}
                  id='upload-photo'
                  multiple
                  type='file'
                />
                <label htmlFor='upload-photo'>
                  <Button variant='contained' component='span' onChange={uploadFileHandler}>
                    Ανεβάστε Φωτογραφία
                  </Button>
                </label>
                <Button variant="contained" color="success" onClick={handleSubmit}>
                  ΔΗΜΟΣΙΕΥΣΗ
                </Button>
              </Box>
            </FormControl>
          </div>
        </Box>
    </>
  )
}
