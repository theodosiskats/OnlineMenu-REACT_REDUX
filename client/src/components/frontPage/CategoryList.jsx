import CategoryCard from './CategoryCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../../redux/categories/categoriesActions'
import BeatLoader from 'react-spinners/BeatLoader'

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
        <div className='spinner'>
          <BeatLoader color={'#1a73e881'} />
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className='grid lg:grid-cols-2 xl:grid-cols-3'>
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      )}
    </>
  )
}

export default CategoryList
