// assets
import AutoStories from '@mui/icons-material/AutoStories'
import List from '@mui/icons-material/List'
import Add from '@mui/icons-material/Add'

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
      title: 'Λίστα κατηγοριών',
      type: 'item',
      url: '/dashboard/categories/',
      icon: <List/>,
    },
    {
      id: 'index',
      title: 'Νέα κατηγορία',
      type: 'item',
      url: '/dashboard/categories/newcategory',
      icon: <Add/>,
    }
  ],
}

export default categories
