import React from 'react'
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//TODO - add modal on image click

function CatalogueProduct({ product }) {
  // const theme = useTheme();
  const {name, description, price, image} = product

  return (
    <>
    <Card sx={{ display: 'flex', border: 'solid', borderColor: '#7d7d7d35', borderWidth: '0.65px', padding: '2px 3px' }}>
      {image[0] ?
        <CardMedia
          component="img"
          sx={{ width: 100, maxHeight: 100, borderRadius: 2 }}
          image={image[0] ? image[0].url : ''}
          alt=''
        />
        : <></>}
      <Box sx={{ display: 'flex', flexGrow: 1, alignSelf: 'center', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle2">
            {name}
          </Typography>
          {description ? 
            <Typography variant="caption" color="text.secondary" component="div">
              {description}
            </Typography>
          : <></>}
        </CardContent>
      </Box>
      {price ? 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flexGrow: 'end', paddingRight: 1 }}>
          <Typography variant="h6" color="text.secondary" component="div">
              {price}€
          </Typography>
        </Box>
      : <></>}
    </Card>
    </>
  )
}

export default CatalogueProduct