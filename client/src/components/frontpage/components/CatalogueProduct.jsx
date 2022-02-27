import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function CatalogueProduct({ product }) {
  const theme = useTheme();
  const {name, description, price, Image} = product

  return (
    <>
    <Card sx={{ display: 'flex', border: 'solid', borderColor: '#7d7d7d35', borderWidth: '0.65px' }}>
      {Image[0] ?
        <CardMedia
          component="img"
          sx={{ width: 100, maxHeight: 100 }}
          image={Image[0] ? Image[0].url : ''}
          alt=''
        />
        : <></>}
      <Box sx={{ display: 'flex', flexGrow: 1, alignSelf: 'center', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle2">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </Box>
      {price ? 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flexGrow: 'end', paddingRight: 3 }}>
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
