import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../../styles/card.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CategoryDefaultImage from '../../shared/CategoryDefaultImage.png'

function CategoryCard({ category }) {
  return (
    <>
      {/* <div className='py-2 px-2 max-w-2xl mx-auto my-auto min-h-full min-w-full'>
        <div className='card glassCustom shadow-lg'>
          <Link to={`/Catalogue/${category.name}`}>
            <div className='card-body-custom lg:min-h-card'>
              <div className='grid grid-cols-6'>
                <div className='col-span-4 justify-start my-auto'>
                  <h2 className='lg:text-2lg md:text-lg sm:text-md font-bold '>
                    {category.name}
                  </h2>
                  <p className='text-sm'>
                    {category.description ? category.description : ''}
                  </p>
                </div>
                <div className='col-span-2 my-auto pl-4 place-self-end'>
                  <img
                    src={category.Image[0] ? category.Image[0].url : ''}
                    className='rounded-lg shadow-lg max-h-20'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div> */}
        <Link to={`/Catalogue/${category.name}`} style={{ textDecoration: 'none' }}>
          <Container style={{ textDecoration: 'none', color: 'black', paddingTop: '1em'}}>
            <Card>
              <Row>
                <Col xs={4}>
                  {/* TODO - check if image is working */}
                  <img
                    className='card-img-left'
                    src={category.Image[0] ? category.Image[0].url : CategoryDefaultImage}
                    alt=''
                  />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <div className='cardText'>
                      <Card.Title>{category.name}</Card.Title>
                      <Card.Text className='small '>
                        {category.description ? category.description : ''}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </Link>
    </>
  )
}

CategoryCard.defaultProps = {
  name: 'no-name',
  description: '',
  Image: '',
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  Image: PropTypes.string,
}

export default CategoryCard
