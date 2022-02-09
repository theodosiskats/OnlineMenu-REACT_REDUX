import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
// import '../../../styles/navbar.css'
import { listCategories } from '../../../redux/categories/categoriesActions'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

//TODO - make dropdown work with useRef instead of state

function NavbarFront({ title }) {
  // Add context to retrieve categories for dropdown menu
  const dispatch = useDispatch()
  const categoriesList = useSelector((state) => state.categoriesList)
  const { categories } = categoriesList
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  // Show/Hide dropdown menu
  const [menuDisplay, setmenuDisplay] = useState(true)
  const [displayMenu, setdisplayMenu] = useState('')

  const showMenu = () => {
    setmenuDisplay(!menuDisplay)
    if (menuDisplay) {
      setdisplayMenu('')
    } else {
      setdisplayMenu('none')
    }
    return displayMenu
  }

  return (
    //         <Link to='/' className="btn btn-ghost btn-sm rounded-btn">Home</Link>
    //         <Link to='/about' className="btn btn-ghost btn-sm rounded-btn">About</Link>

    //
    //Other bg colors for navbar bg-[#5ca9b0] bg-[#1a73e8] or bg-neutral-focus
    //


    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='/dashboard'>
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
