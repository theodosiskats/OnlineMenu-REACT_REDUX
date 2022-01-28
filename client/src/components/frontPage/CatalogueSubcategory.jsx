import CatalogueProduct from "./CatalogueProduct";

function CatalogueSubcategory({ subcategory, products }) {

  let productsArray = []

  products.forEach(product => {
    if(subcategory.name === product.subcategory){
      productsArray.push(product)
    }
  });

  return ( 
    <>
    <div className="py-2 px-2 max-w-2xl mx-auto my-auto min-h-full min-w-full">
      <div>
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold">{subcategory.name}</h3>
        {productsArray.map((product) => (
            <CatalogueProduct key={product._id} product={product}/>
          ))}
      </div>
    </div>
    </>

    // TODO - Figure Out why this doesnt work
    // products.map(product => (
    //   if(subcategory.name === product.subcategory){
    //     <CatalogueProduct key={product._id} product={product}/>
    //   }
    // ))
   );
}

export default CatalogueSubcategory;