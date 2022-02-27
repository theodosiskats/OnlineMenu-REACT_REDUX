import { useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { listCategories } from '../../../redux/categories/categoriesActions'
//TODO - fix image to state upload
export default function NewCategory() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  const [values, setValues] = useState({
    name: '',
    description: '',
    Image: [],
  })
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    console.log('values', values)
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
                  value={values.price}
                  onChange={handleChange('name')}
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
                />
              </FormControl>
            </FormControl>

            <FormControl sx={{ mt: 5 }} variant='standard'>
              <input
                accept='image/png,.jpeg'
                style={{ display: 'none' }}
                id='upload-photo'
                multiple
                type='file'
              />
              <label htmlFor='upload-photo'>
                <Button variant='contained' component='span'>
                  Ανεβάστε Φωτογραφία
                </Button>
              </label>
            </FormControl>
          </div>
        </Box>
    </>
  )
}
