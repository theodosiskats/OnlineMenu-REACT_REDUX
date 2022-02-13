import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listSubcategories } from '../../../redux/subcategories/subcategoriesActions'
import { listProducts } from '../../../redux/products/productsActions'
import CatalogueSubcategory from '../components/CatalogueSubcategory'
import Spinner from 'react-bootstrap/Spinner'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

function Catalogue() {
  const urlCategoryNameParams = useParams()
  const categoryName = urlCategoryNameParams.category

  const dispatch = useDispatch()
  const subcategoriesList = useSelector((state) => state.subcategoriesList)
  const productsList = useSelector((state) => state.productsList)
  const { loadingSub, subcategories } = subcategoriesList
  const { loading, error, products } = productsList

  useEffect(() => {
    dispatch(listSubcategories(categoryName))
    dispatch(listProducts(categoryName))
  }, [dispatch])

  console.log('products', products)
  console.log('subcategories', subcategories)
  // TODO - fix spinner not playing in deployed appl
  return (
    <>
      {loading || loadingSub ? (
        <div className='spinner'>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {subcategories.map((subcategory) => (
              <>
              <ListItem alignItems='flex-start' key={subcategory._id}>
                <ListItemText
                  primary={subcategory.name}
                  secondary={
                    <React.Fragment>
                      {subcategory.description}
                    </React.Fragment>
                  }
                />
                <Divider variant='inset'/>
                <Divider variant='inset'/>
              </ListItem>
                  <CatalogueSubcategory
                    subcategory={subcategory}
                    products={products}
                  />
              </>
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
