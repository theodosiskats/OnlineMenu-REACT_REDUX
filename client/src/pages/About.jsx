function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        Εφαρμογή ηλεκτρονικού μενού για καφετέριες, εστιατόρια, μπαρ και κάθε είδους κατάστημα εστίασης.
        <a href="">
          {' '}
          Θεοδόσης Κατσούλης
        </a>{' '}
        Μία εφαρμογή της
        <strong>
          <a> BearDevKT</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version:&nbsp;
        <span className='text-white'> 3.0.0-alpha</span>
      </p>
      <p className='text-lg text-gray-400'>
         Development:&nbsp;
        <a className='text-white' href='https://twitter.com/theodosiskats'>
        Theodosis Katsoulis
        </a>
      </p>
      <p className='text-lg text-gray-400'>
         Github Repos:&nbsp;
        <a className='text-white' href='https://twitter.com/theodosiskats'>
        Theodosis Katsoulis
        </a>
      </p>
    </>
  )
}

export default About