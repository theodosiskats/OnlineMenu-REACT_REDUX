import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div>
      <div className="mt-20">
        <img 
          className='text-center mx-auto'
          width={45}
          src={spinner}
          alt='Loading...'/>
      </div>
    </div>
  )
}

export default Spinner