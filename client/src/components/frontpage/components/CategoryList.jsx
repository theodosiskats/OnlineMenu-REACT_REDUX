import CategoryCard from './CategoryCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../../../redux/categories/categoriesActions'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function CategoryList() {
  const dispatch = useDispatch()
  const categoriesList = useSelector((state) => state.categoriesList)
  const { loading, error, categories } = categoriesList

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  return (
    <>
      {/* TODO - The breakpoint div class will be transfered to the CategoryList || I DONT REMEMBER WHY I SAID THAT????!! */}

      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress className='spinner' />
        </Box>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div style={{ padding: '10px', paddingTop: '10px' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {categories.map((category) => (
                <Grid key={category._id} item xs={12} sm={12} md={12} lg={6} xl={4}>
                  <CategoryCard key={category._id} category={category} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </>
  )
}

export default CategoryList
