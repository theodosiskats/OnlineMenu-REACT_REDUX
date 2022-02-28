import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CatalogueSubcategory from '../components/CatalogueSubcategory'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { getSubcategoriesbyCategory, reset as resetSubcategories} from '../../../redux/subcategories/subcategoriesSlice'
import { getProductsbyCategory, reset as resetProducts} from '../../../redux/products/productsSlice'

function Catalogue() {
  const dispatch = useDispatch()
  const category = useParams().category

  const { subcategories, isLoading: isLoadingSubcategories, isSuccess: isSuccessSubcategories } = useSelector((state) => state.subcategories)
  const { products, isLoading: isLoadingProducts, isSuccess: isSuccessProducts } = useSelector((state) => state.products)

  //Need to find out why is this needed and when (maybe on create new product, it erases the previous state)
  // useEffect(() => {
  //   return () => {
  //     if (isSuccessSubcategories && isSuccessProducts) {
  //       dispatch(resetSubcategories())
  //       dispatch(resetProducts())
  //     }
  //   }
  // }, [dispatch, isSuccessSubcategories, isSuccessProducts])

  useEffect(() => {
    dispatch(getSubcategoriesbyCategory(category))
    dispatch(getProductsbyCategory(category))
  }, [dispatch])



  console.log('products', products)
  console.log('subcategories', subcategories)




  // TODO - fix spinner not playing in deployed appl
  return (
    <>
      {isLoadingSubcategories || isLoadingProducts ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress className='spinner' />
        </Box>
      ) : (
        <>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {subcategories.map((subcategory) => (
              <div style={{backgroundColor: '#7d7d7d50'}} key={subcategory._id}>
                <ListItem alignItems='flex-start'>
                  <ListItemText
                    primary={subcategory.name}
                    
                    secondary={
                      <React.Fragment>{subcategory.description}</React.Fragment>
                    }
                  />
                  <Divider variant='inset' />
                </ListItem>
                <CatalogueSubcategory
                  subcategory={subcategory}
                  products={products}
                />
              </div>
            ))}
          </List>
          <div className='floatingButton'>
            <Link to='/'>
              <i className='fad fa-arrow-circle-left inline pr-2 text-5xl align-middle text-[#1a73e8]'></i>
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default Catalogue
