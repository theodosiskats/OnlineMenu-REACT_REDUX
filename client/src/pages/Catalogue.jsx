import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import CatalogueSubcategory from '../components/frontPage/CatalogueSubcategory'
import BeatLoader from 'react-spinners/BeatLoader'

function Catalogue(props) {
  const urlCategoryNameParams = useParams()
  const categoryName = urlCategoryNameParams.category
  const [catalogue, setCatalogue] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchCatalogue = async () => {
      const { data } = await axios.get(`/api/front/show/${categoryName}`)
      setCatalogue(data)
      setloading(false)
    }
    fetchCatalogue()
  }, [])

  const { subcategories, products } = catalogue
  // TODO - fix spinner not playing in deployed appl
  return (
    <>
      {loading ? (
        <div className='spinner'>
          <BeatLoader color={'#1a73e881'}/>
        </div>
      // ) : error ? (
      //   <h4>{error}</h4>
      ) : (
        <>
        <div className='pt-3 grid lg:grid-cols-2 xl:grid-cols-2'>
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
