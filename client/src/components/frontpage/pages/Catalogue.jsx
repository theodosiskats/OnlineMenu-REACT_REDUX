import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listSubcategories } from '../../../redux/subcategories/subcategoriesActions'
import { listProducts } from '../../../redux/products/productsActions'
import CatalogueSubcategory from '../components/CatalogueSubcategory'
import Spinner from 'react-bootstrap/Spinner'


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
        <div className='pt-3 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
          {subcategories.map((subcategory) => (
            <CatalogueSubcategory
              key={subcategory._id}
              subcategory={subcategory}
              products={products}
            />
          ))}
        </div>
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