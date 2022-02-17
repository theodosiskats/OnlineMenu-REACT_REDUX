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
import Button from '@mui/material/Button'

{
  /* TODO - load subcategories here from api */
}
{
  /* {currencies.map((option) => (
<option key={option.value} value={option.value}>
  {option.label}
</option>
))} */
}

export default function NewCategory() {
  const [values, setValues] = useState({
    category: 'category1',
    subcategory: 'subcategory1',
    name: '',
    price: '5',
    password: '',
    weight: '',
    weightRange: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
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
                onChange={handleChange('category')}
                helperText='Επιλέξτε κατηγορία'
                variant='standard'>
                <MenuItem key={'category1'} value={'category1'}>
                  {'category1'}
                </MenuItem>
                <MenuItem key={'category2'} value={'category2'}>
                  {'category2'}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id='subcategory'
                select
                label='Υποκατηγορία'
                value={values.subcategory}
                onChange={handleChange('subcategory')}
                helperText='Επιλέξτε υποκατηγορία'
                variant='standard'>
                <MenuItem key={'subcategory1'} value={'subcategory1'}>
                  {'subcategory1'}
                </MenuItem>
                <MenuItem key={'subcategory2'} value={'subcategory2'}>
                  {'subcategory2'}
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <FormControl fullWitdh sx={{ mt: 2 }} variant='standard'>
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

          <FormControl fullWitdh sx={{ mt: 2 }} variant='standard'>
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
            accept='image/*'
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
  )
}
