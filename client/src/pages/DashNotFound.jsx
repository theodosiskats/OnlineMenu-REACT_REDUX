import { FaHome } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero justify-center mx-auto mt-24">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
            Oops!
          </h1>
          <p className="text-5xl mb-8">
            404 - Η σελίδα που ψάχνεις δεν υπάρχει!
          </p>
          {/* useNavigate.goBack returns undefined || to={`${useNavigate.goBack}`} */}
          <Link className="btn btn-primary btn-lg" to='/dashboard'>
            <FaHome className="mr-2"/>
            Πισω στην αρχική
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound