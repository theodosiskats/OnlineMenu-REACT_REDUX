import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../../styles/navbar.css'
import { listCategories } from '../../../redux/categories/categoriesActions'

//TODO - make dropdown work with useRef instead of state 

function Navbar({ title }) {
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
    //     <div className="flex-1 px-2 mx-2">
    //       <div className="flex justify-end">
    //         <Link to='/' className="btn btn-ghost btn-sm rounded-btn">Home</Link>
    //         <Link to='/about' className="btn btn-ghost btn-sm rounded-btn">About</Link>
    //       </div>
    //     </div>

    //
    //Other bg colors for navbar bg-[#5ca9b0] or bg-neutral-focus
    //

    <div className='navbar mb-2 shadow-xl bg-[#1a73e8]'>
      <div className='flex-1 px-2 mx-2'>
        <Link to='/' className='text-lg font-bold align-middle'>
          <i className='fad fa-book-open inline pr-2 text-2xl align-middle text-white'></i>
          <span className='text-lg text-white font-bold'>{title}</span>
        </Link>
      </div>

      <Link to='/dashboard' className='text-white btn glass mr-4'>Admin Panel</Link>

      {/* TODO - Fix links not working on deployed app */}

      {/* <div className='flex-none text-neutral'>
        <div className='dropdown dropdown-end' onClick={showMenu}>
          <div tabIndex='0' className='m-1 btnHamburger mr-5'>
            <i className='fal fa-bars text-2xl text-white' />
          </div>
          <ul
            tabIndex='0'
            style={{ display: displayMenu }}
            className='p-2 shadow menu dropdown-content bg-slate-200 rounded-box w-52 mr-5 '>
            {categories.map((category) => (
              <li key={category._id} className='text-slate-600'>
                <button onClick={navigate(`/Catalogue/${category.name}`)}>{category.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Online Menu App',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
