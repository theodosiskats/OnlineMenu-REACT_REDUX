import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { listCategories } from '../../../redux/categories/categoriesActions'
import { getCategories, reset } from '../../../redux/categories/categoriesSlice'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import CategoryCard from './CategoryCard'

function CategoryList() {
  const dispatch = useDispatch()
  const { categories, isLoading, isSuccess } = useSelector((state) => state.categories)

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      {/* TODO - The breakpoint div class will be transfered to the CategoryList || I DONT REMEMBER WHY I SAID THAT????!! */}

      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress className='spinner' />
        </Box>
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
