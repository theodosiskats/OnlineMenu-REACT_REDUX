function CatalogueProduct({ product }) {
  return (
    <>
      <div className='border-t-2 border-b-2 card-body-custom lg:min-h-card'>
        <div className='grid grid-cols-8'>
          <div className='col-span-1 lg:col-span-2 xl:col-span-2 my-auto ml-0 place-self-start'>
            {/* TODO - Adjust image size and enlarge it */}
            <a href='#my-modal'>
              <img
                src={product.Image[0] ? product.Image[0].url : ''}
                className='rounded-md shadow-lg max-h-20 lg:max-h-30 xl:max-h-120 -ml-4'
                alt=''
                fluid='true'
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
          <div className='col-span-5 lg:col-span-4 xl:col-span-4 justify-start mt-0'>
            <h1 className='font-bold text-sm lg:text-lg xl:text-xl'>
              {product.name}
            </h1>
            <p className='text-2xs lg:text-lg xl:text-xl'>
              {product.description ? product.description : ''}
            </p>
          </div>
          <div className='col-span-2 place-self-end my-auto'>
            <h1 style={{ fontSize: '1rem' }} className='font-bold '>
              {product.price} €
            </h1>
          </div>
        </div>
      </div>

      <div id='my-modal' className='modal'>
        <div className='modal-box'>
          <img
            src={product.Image[0] ? product.Image[0].url : ''}
            alt=''
            fluid='true'
            style={{ objectFit: 'contain' }}
          />
          <div className='modal-action'>
            <a href='#' className='btn'>
              Close
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatalogueProduct
