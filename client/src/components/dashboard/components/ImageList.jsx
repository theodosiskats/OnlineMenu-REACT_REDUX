function ImageList({imagesArray}) {
  return (
    <ImageList sx={{ width: maxWidth, height: maxHeight }} cols={4}>
      {imagesArray.map((img) => (
        <ImageListItem key={img.filename}>
          <img
            src={`${img.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${img.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={img.filename}
            loading='lazy'
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position='top'
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                aria-label={`star ${img.title}`}>
                <ClearIcon
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  onClick={handleClickOpenDialog}
                />
                {/* TODO - add onClick MUI confirmation dialog to delete image, then API request imagedelete */}
              </IconButton>
            }
            actionPosition='left'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageList
