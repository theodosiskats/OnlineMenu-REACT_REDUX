import CatalogueProduct from './CatalogueProduct'


function CatalogueSubcategory({ subcategory, products }) {
  let productsArray = []

  products.forEach((product) => {
    if (subcategory.name === product.subcategory) {
      productsArray.push(product)
    }
  })

  return (
    <>
      {productsArray.map((product) => (
        <CatalogueProduct key={product._id} product={product} />
      ))}
    </>

    // TODO - Figure Out why this doesnt work
    // products.map(product => (
    //   if(subcategory.name === product.subcategory){
    //     <CatalogueProduct key={product._id} product={product}/>
    //   }
    // ))
  )
}

export default CatalogueSubcategory
