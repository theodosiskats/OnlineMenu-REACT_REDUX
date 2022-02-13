// assets
import ClassTwoTone from '@mui/icons-material/ClassTwoTone'
import Home from '@mui/icons-material/Home'

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  icon: <ClassTwoTone/>,
  subheader: 'Test',
  children: [
    {
      id: 'index',
      title: 'Κεντρική',
      type: 'item',
      url: '/dashboard/',
      icon: <Home/>,
    }
  ],
}

export default dashboard
