// assets
import Fastfood from '@mui/icons-material/Fastfood'
import List from '@mui/icons-material/List'
import Add from '@mui/icons-material/Add'

// ==============================|| products MENU ITEMS ||============================== //

const products = {
  id: 'products',
  title: 'Προϊόντα',
  type: 'group',
  icon: <Fastfood/>,
  subheader: 'Test',
  children: [
    {
      id: 'listproducts',
      title: 'Λίστα Προϊόντων',
      type: 'item',
      url: '/products/',
      icon: <List/>,
    },
    {
      id: 'newproduct',
      title: 'Νέο Προϊόν',
      type: 'item',
      url: '/products/newproduct',
      icon: <Add/>,
    },
  ],
}

export default products
