import React from 'react'

function DashHeader() {
  return (

    <div className="navbar mb-2 mx-0 shadow-lg bg-neutral text-neutral-content w-full">
      <div className="flex-none hidden lg:flex">
        {/* Add onclick to show and hide side menu */}
        <button className="btn btn-square btn-ghost">
        <i className='fal fa-bars text-2xl'></i>
        </button>
      </div>
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <span className="text-lg font-bold">
          {`currentUser here`}
        </span>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-ghost"/>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
        <i className='fal fa-search text-lg'></i>
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
        <i className='fal fa-bell text-lg'></i>
        </button>
      </div>

    </div>
  )
}

export default DashHeader


