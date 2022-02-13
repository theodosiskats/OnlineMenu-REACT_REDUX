import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../../styles/card.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function CategoryCard({ category }) {
  return (
    <>
      <div style={{  }}>
        <Link
          to={`/Catalogue/${category.name}`}
          style={{ textDecoration: 'none' }}>
          <Card sx={{ display: 'flex', height: '10rem' }}>
            <CardMedia
              component='img'
              sx={{ width: 151 }}
              image={category.Image[0] ? category.Image[0].url : ''}
              alt=''
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {category.name}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'>
                  {category.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Link>
      </div>
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
