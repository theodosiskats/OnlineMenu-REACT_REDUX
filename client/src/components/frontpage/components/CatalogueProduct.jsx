import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

function CatalogueProduct({ product }) {
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems='flex-start' key={product._id}>
          <ListItemAvatar>
            <Avatar
              alt='Remy Sharp'
              src={product.Image[0] ? product.Image[0].url : ''}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={
              <React.Fragment>
                {/* <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'>
                  {product.name}
                </Typography> */}
                {product.description}
              </React.Fragment>
            }
          />
          <Divider variant='inset'/>
        </ListItem>
      </List>
 
    </>
  )
}

export default CatalogueProduct
