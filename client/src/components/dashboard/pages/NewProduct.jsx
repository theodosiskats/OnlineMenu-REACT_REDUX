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
//DATA FETCHING
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../../../redux/categories/categoriesActions'
import { listSubcategoriesByCategory } from '../../../redux/subcategories/subcategoriesActions'

//TODO - fix image loading to state

export default function NewProduct() {
  const dispatch = useDispatch()
  const categoriesList = useSelector((state) => state.categoriesList)
  const subcategoriesList = useSelector((state) => state.subcategoriesList)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const { loading, error, categories } = categoriesList
  const { subcategories } = subcategoriesList

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  const [values, setValues] = useState({
    category: '',
    subcategory: '',
    name: '',
    description: '',
    price: '',
    Image: {}
  })
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    console.log(values)
  }

  const handleChangeCategory = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    setBtnDisabled(false)
    dispatch(listSubcategoriesByCategory(event.target.value))
    console.log(values)
  }


  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress className='spinner' />
        </Box>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
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
                <Grid item xs={6}>
                  <TextField
                    disabled={btnDisabled}
                    fullWidth
                    id='subcategory'
                    select
                    label='Υποκατηγορία'
                    value={values.subcategory}
                    onChange={handleChange('subcategory')}
                    helperText='Επιλέξτε υποκατηγορία'
                    variant='standard'>
                    {subcategories.map((subcategory) => (
                    <MenuItem key={subcategory._id} value={subcategory.name}>
                      {subcategory.name}
                    </MenuItem>
                  ))}
                  </TextField>
                </Grid>
              </Grid>
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
                <InputLabel htmlFor='standard-adornment-price'>
                  Τιμή (Προαιρετικό)
                </InputLabel>
                <Input
                  id='standard-adornment-price'
                  value={values.price}
                  onChange={handleChange('price')}
                  startAdornment={
                    <InputAdornment position='start'>€</InputAdornment>
                  }
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
      )}
    </>
  )
}
