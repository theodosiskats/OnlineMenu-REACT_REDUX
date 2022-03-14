import { useState } from 'react'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
//DATA FETCHING
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../../redux/categories/categoriesSlice'
import { createSubcategory, reset } from '../../../../redux/subcategories/subcategoriesSlice'

//TODO - create modal for new subcategory and category if not existing

export default function NewProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const { categories, isLoading } = useSelector((state) => state.categories)
  const { isError, isSuccess, message  } = useSelector((state) => state.subcategories)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    if (!isMounted) {
      if (isError) {
        toast.error('Ουπς, κάτι πήγε στραβά, ο server λέει: ' + message)
      }

      if (isSuccess) {
        setIsMounted(true)
        dispatch(reset())
        toast.success(`Νέα υποκατηγορία: ${values.name}\n κατηγορία: ${values.category}`)
        navigate('/dashboard/categories')
      }
    }
    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  
  const [values, setValues] = useState({
    category: '',
    name: '',
    description: '',
  })
  const [image, setImage] = useState('')

  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    console.log(values)
  }
  
  const onFileChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleChangeCategory = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    setBtnDisabled(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsMounted(false)
    const payload = new FormData()
    payload.append('image', image)
    payload.append('category', values.category)
    payload.append('name', values.name)
    payload.append('description', values.description)
    dispatch(createSubcategory(payload))
  }

  if (isLoading)
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress className='spinner' />
    </Box>
  )

  return (
    <>
      <Box
        sx={{
          m: 4,
        }}>
        <div>
          <FormControl fullWidth sx={{ width: '100%' }} variant='standard'>
            <Grid container spacing={4}>
              <Grid fullWidth item xs={6}>
                <TextField
                  fullWidth
                  id='category'
                  select
                  label='Κατηγορία'
                  value={values.category}
                  onChange={handleChangeCategory('category')}
                  helperText='Επιλέξτε κατηγορία'
                  variant='standard'>
                  {categories.map((category) => (
                    <MenuItem key={category._id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <FormControl fullWidth sx={{ mt: 2 }} variant='standard'>
              <InputLabel htmlFor='name'>Ονομασία</InputLabel>
              <Input id='name' value={values.name} onChange={handleChange('name')} />
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

            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 4,
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
                <Button variant='contained' component='span' style={{ textTransform: 'none' }}>
                  Ανεβάστε Φωτογραφία
                </Button>
              </label>
              <Button variant='contained' color='success' style={{ textTransform: 'none' }} onClick={handleSubmit}>
                Αποθήκευση
              </Button>
            </Box>
        </div>
      </Box>
    </>
  )
}
