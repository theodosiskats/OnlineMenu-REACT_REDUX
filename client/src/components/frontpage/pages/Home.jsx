import React from 'react'
import CategoryList from '../components/CategoryList'
import Alert from '../../shared/Alert'
import InfoButton from '../../shared/InfoButton'

function Home() {
  return (
    <>
      <Alert variant={'warning'} floating={'floating'}>
        Αυτή είναι μία ειδοποίηση που κλείνει επιτελους!
      </Alert>
      <InfoButton
        title={'Προσοχή!'}
        text={
          'Lorem ipsum dolor sit amet.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed maxime voluptatum.'
        }
      />
      <CategoryList />
    </>
  )
}

export default Home
