// assets
import Class from '@mui/icons-material/Class'
import Home from '@mui/icons-material/Home'

// ==============================|| subcategories MENU ITEMS ||============================== //

const subcategories = {
  id: 'subcategories',
  title: 'Υποκατηγορίες',
  type: 'group',
  icon: <Class/>,
  subheader: 'Test',
  children: [
    {
      id: 'index',
      title: 'Κεντρική',
      type: 'item',
      url: '/dashboard/subcategories/',
      icon: <Home/>,
    }
  ],
}

export default subcategories
