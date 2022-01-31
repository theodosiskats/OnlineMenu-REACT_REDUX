import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiQuestionFill } from 'react-icons/ri'
import { FaBackward, FaUsers, FaUtensils, FaPlus, FaHome } from 'react-icons/fa'
import { FiUser, FiUserPlus, FiUsers, FiUserCheck } from 'react-icons/fi'
import { BsBarChartSteps } from 'react-icons/bs'


function DashNavBar() {
  return (
    <div className="h-full space-y-2 w-full min-w-fit bg-[#bfbfd449] text-gray-800 shadow-md hidden md:hidden lg:block xl:block">
      <div className="flex items-center pl-6 p-2 pt-4 space-x-4">
        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
      </div>
      <div className="divide-y divide-gray-400">
        <ul className="pt-2 pb-2 space-y-1 text-sm">
          <li>
            <NavLink to='/dashboard/test' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              {/* <i className="fad fa-home text-xl my-auto w-5"></i> */}
              <i className="text-xl my-auto w-5 text-gray-600"><FaHome /></i>
              <span className='text-base'>Κεντρική </span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex items-center text-white font-semibold bg-slate-700 pl-6 p-2 space-x-3">
              {/* <i className="fad fa-utensils-alt text-xl my-auto w-5"></i> */}
              <span>Προϊόντα</span>
            </div>
          </li>
          <li>
            <NavLink to='/dashboard/test3' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              {/* <i className='fal fa-backward text-lg my-auto w-5'></i> */}
              <i className="text-xl my-auto w-5 text-gray-600"><FaUtensils /></i>
              <span>Λίστα Προϊόντων</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              {/* <i className='fal fa-backward text-lg my-auto w-5'></i> */}
              <i className="text-xl my-auto w-5 text-gray-600"><FaPlus /></i>
              <span>Νέο Προϊόν</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex items-center text-white font-semibold bg-slate-700  pl-6 p-2 space-x-3">
              {/* <i className="fad fa-th-list text-xl my-auto w-5"></i> */}
              <span>Κατηγορίες </span>
            </div>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className='fad fa-clipboard-list text-lg my-auto w-5'></i>
              <span>Οι κατηγορίες μου</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className='fad fa-comment-plus text-lg my-auto w-5'></i>
              <span>Νέα Κατηγορία</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex items-center text-white font-semibold bg-slate-700 pl-6 p-2 space-x-3">
              {/* <i className="fad fa-cabinet-filing text-xl my-auto w-5"></i> */}
              <span>Υποκατηγορίες </span>
            </div>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className='fal fa-clipboard-list text-lg my-auto w-5'></i>
              <span>Οι υποκατηγορίες μου</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className='fal fa-backward text-lg my-auto w-5'></i>
              <span>Νέα Υποκατηγορία</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className="fad fa-file-pdf text-xl my-auto w-5"></i>
              <span>Δημοσίευση Αρχείου</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className="fad fa-rss-square text-xl my-auto w-5"></i>
              <span>Ανακοινώσεις </span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className="fad fa-table text-xl my-auto w-5"></i>
              <span>Data Tables</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex text-white font-semibold bg-slate-700 items-center pl-6 p-2 space-x-3">
              {/* <i className='fal fa-backward text-lg my-auto w-5'></i> */}
              {/* <i className='text-lg my-auto w-5'><FaUsers/></i> */}
              <span>Λογαριασμοί</span>
            </div>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              {/* <i className='fal fa-backward text-lg my-auto w-5'></i> */}
              <i className='text-lg my-auto w-5'><FaUsers /></i>
              <span>Χρήστες</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              <i className='fal fa-backward text-lg my-auto w-5'></i>
              <span>Νέος Χρήστης</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='/dashboard/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              {/* <i className="fad fa-question-circle text-xl my-auto w-5"></i> */}
              <i className='text-2xl my-auto w-5'><RiQuestionFill /></i>
              <span>Πληροφορίες Εφαρμογής</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className={(navData) => navData.isActive ? "flex items-center pl-6 p-2 space-x-3 rounded-md font-semibold" : "flex items-center pl-6 p-2 space-x-3 rounded-md"}>
              {/* <i className="fad fa-backward text-xl my-auto w-5"></i> */}
              <i className="text-xl my-auto w-5"><FaBackward /></i>
              <span>Πίσω στους καταλόγους</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashNavBar
