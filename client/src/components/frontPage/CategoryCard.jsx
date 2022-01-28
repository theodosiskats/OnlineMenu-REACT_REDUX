import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../styles/card.css'

function CategoryCard({category}) {
  return (
    <>
      <div className="py-2 px-2 max-w-2xl mx-auto my-auto min-h-full min-w-full">
          <div className="card glassCustom shadow-lg">
            <Link to={`/Catalogue/${category.name}`}>
              <div className="card-body-custom lg:min-h-card">
                <div className="grid grid-cols-6">
                  <div className="col-span-4 justify-start my-auto">
                    <h2 className="lg:text-2lg md:text-lg sm:text-md font-bold ">{category.name}</h2> 
                    <p className="text-sm">{category.description ? category.description : ''}</p>
                  </div>
                  <div className="col-span-2 my-auto pl-4 place-self-end">
                    <img
                      src={category.Image[0] ? category.Image[0].url : ''}
                      className="rounded-lg shadow-lg max-h-20"
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
      </div>
      
    </>
  );
}

CategoryCard.defaultProps = {
  name: 'no-name',
  description: '',
  Image: ''
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  Image: PropTypes.string,
}

export default CategoryCard;
