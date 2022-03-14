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
      title: 'Λίστα προϊόντων',
      type: 'item',
      url: '/dashboard/products/',
      icon: <List/>,
    },
    {
      id: 'newproduct',
      title: 'Νέο προϊόν',
      type: 'item',
      url: '/dashboard/products/newproduct',
      icon: <Add/>,
    },
  ],
}

export default products
