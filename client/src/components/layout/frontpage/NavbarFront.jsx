import React from 'react'
import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { listCategories } from '../../../redux/categories/categoriesActions'

// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'

//TODO - make dropdown work with useRef instead of state

function NavbarFront({ title }) {
  // Add context to retrieve categories for dropdown menu
  const dispatch = useDispatch()
  const categoriesList = useSelector((state) => state.categoriesList)
  const { categories } = categoriesList

  // Dropdown state

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  // End Dropdown state

  useEffect(() => {
    dispatch(listCategories())
  }, [])

  return (
    //         <Link to='/' className="btn btn-ghost btn-sm rounded-btn">Home</Link>
    //         <Link to='/about' className="btn btn-ghost btn-sm rounded-btn">About</Link>

    //
    //Other bg colors for navbar bg-[#5ca9b0] bg-[#1a73e8] or bg-neutral-focus
    //

    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Stack direction='row' spacing={2}>
              <div>
                <Button
                  ref={anchorRef}
                  id='composition-button'
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}>
                  <MenuIcon style={{ color: 'white' }} />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement='bottom-start'
                  transition
                  disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start'
                            ? 'left top'
                            : 'left bottom',
                      }}>
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='composition-menu'
                            aria-labelledby='composition-button'
                            onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </Stack>
            <Box sx={{ display: 'flex', flexGrow: 1, alignSelf: 'center', justifyContent: 'space-between' }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  {title}
                </Typography>
              </Link>
              <Button
                as={Link}
                to='/dashboard'
                color='inherit'
                style={{ textDecoration: 'none' }}>
                Dashboard
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

NavbarFront.defaultProps = {
  title: 'Online Menu App',
}

NavbarFront.propTypes = {
  title: PropTypes.string,
}

export default NavbarFront
