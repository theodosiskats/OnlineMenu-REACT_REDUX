// assets
import PeopleAlt from '@mui/icons-material/PeopleAlt'
import GroupAdd from '@mui/icons-material/GroupAdd'
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings'

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const categories = {
  id: 'auth',
  title: 'Χρήστες',
  type: 'group',
  icon: <PeopleAlt/>,
  subheader: 'Test',
  children: [
    {
      id: 'authlist',
      title: 'Όλοι οι χρήστες',
      type: 'item',
      url: '/categories/',
      icon: <AdminPanelSettings/>,
    },
    {
      id: 'newuser',
      title: 'Νέος χρήστης',
      type: 'item',
      url: '/categories/',
      icon: <GroupAdd/>,
    }
  ],
}

export default categories
