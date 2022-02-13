// assets
import AutoStories from '@mui/icons-material/AutoStories'
import Home from '@mui/icons-material/Home'

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const categories = {
  id: 'categories',
  title: 'Κατηγορίες',
  type: 'group',
  icon: <AutoStories/>,
  subheader: 'Test',
  children: [
    {
      id: 'index',
      title: 'Κεντρική',
      type: 'item',
      url: '/categories/',
      icon: <Home/>,
    }
  ],
}

export default categories
