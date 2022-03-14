// assets
import AlignVerticalTopTwoToneIcon from '@mui/icons-material/AlignVerticalTopTwoTone';
import List from '@mui/icons-material/List'
import Add from '@mui/icons-material/Add'

// ==============================|| subcategories MENU ITEMS ||============================== //

const subcategories = {
  id: 'subcategories',
  title: 'Υποκατηγορίες',
  type: 'group',
  icon: <AlignVerticalTopTwoToneIcon/>,
  subheader: 'Test',
  children: [
    {
      id: 'subcategories',
      title: 'Λίστα υποκατηγοριών',
      type: 'item',
      url: '/dashboard/subcategories/',
      icon: <List/>,
    },
    {
      id: 'newsubcategory',
      title: 'Νέα υποκατηγορία',
      type: 'item',
      url: '/dashboard/subcategories/newsubcategory',
      icon: <Add/>,
    },
  ],
}

export default subcategories
