//ASSETS
import AuraLogo from '../../../assets/images/logo/aura.png'
//REACT
import { useState } from 'react'
import { Link } from 'react-router-dom'
//MenuItems
import menuItems from '../dashboard/menu-items/index'
//MUI
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemButton from '@mui/material/ListItemButton'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew'

const drawerWidth = 240

// TODO - fix the missing key on list error

function NavBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  // TODO - change appbar title depending on the category clicked
  const [title, setTitle] = useState()

  // TODO - need to make this generate from the menuItems.items and not hardcoded
  const [open, setOpen] = useState({
    dashboard: true,
    categories: true,
    subcategories: true,
    products: true,
    auth: true,
    other: false,
  })

  const handleClick = (id) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }

  // const handleClick = (id) => {
  //   setOpen({ ...state, [id]: !open[id] });
  //   // setOpen((prevState => ({...prevState, [id]: !prevState[id]}))
  // };

  // const handleClick = (item) => {
  //   setOpen({
  //     item : !open
  //   })
  // }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar>
          <img
            as={Link}
            src={AuraLogo}
            style={{
              maxWidth: '60%',
              maxHeight: '60%',
              paddingTop: '10px',
              paddingBottom: '10px',
              margin: '0 auto',
            }}
          />
      </Toolbar>
      <Divider />
      {menuItems.items.map(({id, icon, title, children}) => (
        <>
          <List
            key={id}
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            // subheader={
            //   <ListSubheader component='div' id='nested-list-subheader'>
            //     {item.subheader}
            //   </ListSubheader>
            // }
          >
            <ListItemButton onClick={() => handleClick(id)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
              {open[id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[id]} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {children.map(({id, icon, title, url}) => (
                  <ListItemButton
                    component={Link}
                    to={`${url}`}
                    onClick={handleDrawerToggle}
                    key={id+'CollapseListItem'}
                    sx={{ pl: 3 }}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
        </>
      ))}
      <Link style={{textDecoration: 'none', color: '#202020'}} to='/'>
        <ListItemButton>
          <ListItemIcon><ArrowBackIosNew/></ListItemIcon>
          <ListItemText primary='Πίσω στους καταλόγους' />
        </ListItemButton>
      </Link>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Dashboard
            {/* TODO - add more functionallity to appbar */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          key={'drawer'}
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  )
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default NavBar
