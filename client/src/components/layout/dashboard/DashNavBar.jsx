import React from 'react'
import { NavLink } from 'react-router-dom'

function DashNavBar() {
  return (
    <div className="h-full p-3 space-y-2 w-full min-w-fit bg-white text-gray-800 shadow-md  ">
        <div className="flex items-center p-2 space-x-4">
          <div>
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-300">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li>
              <NavLink to='/dashboard/test'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-home text-xl my-auto w-5"></i>
                <span >Κεντρική </span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/test2'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-utensils-alt text-xl my-auto w-5"></i>
                <span>Προϊόντα</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/test3'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-backward text-lg my-auto w-5'></i>
                <span>Λίστα Προϊόντων</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-backward text-lg my-auto w-5'></i>
                <span>Νέο Προϊόν</span>
              </NavLink>
            </li>
            </ul>
            <ul>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-th-list text-xl my-auto w-5"></i>
                <span>Κατηγορίες </span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fad fa-clipboard-list text-lg my-auto w-5'></i>
                <span>Οι κατηγορίες μου</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fad fa-comment-plus text-lg my-auto w-5'></i>
                <span>Νέα Κατηγορία</span>
              </NavLink>
            </li>
            </ul>
            <ul>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-cabinet-filing text-xl my-auto w-5"></i>
                <span>Υποκατηγορίες </span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-clipboard-list text-lg my-auto w-5'></i>
                <span>Οι υποκατηγορίες μου</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-backward text-lg my-auto w-5'></i>
                <span>Νέα Υποκατηγορία</span>
              </NavLink>
            </li>
            </ul>
            <ul>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-file-pdf text-xl my-auto w-5"></i>
                <span>Δημοσίευση Αρχείου</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-rss-square text-xl my-auto w-5"></i>
                <span>Ανακοινώσεις </span>
              </NavLink>
            </li>
            </ul>
            <ul>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-table text-xl my-auto w-5"></i>
                <span>Data Tables</span>
              </NavLink>
            </li>
            </ul>
            <ul>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-backward text-lg my-auto w-5'></i>
                <span>Λογαριασμοί</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-backward text-lg my-auto w-5'></i>
                <span>Χρήστες</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
                <i className='fal fa-backward text-lg my-auto w-5'></i>
                <span>Νέος Χρήστης</span>
              </NavLink>
            </li>
            </ul>
            <ul>
            <li>
              <NavLink to='/dashboard/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-question-circle text-xl my-auto w-5"></i>
                <span>Πληροφορίες Εφαρμογής</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/'  className={(navData) => navData.isActive ? "flex items-center p-2 space-x-3 rounded-md font-semibold" : "flex items-center p-2 space-x-3 rounded-md" }>
              <i className="fad fa-backward text-xl my-auto w-5"></i>
                <span>Πίσω στους καταλόγους</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default DashNavBar
