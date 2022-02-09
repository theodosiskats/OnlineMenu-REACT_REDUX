import React from 'react'
import { useState } from 'react'
import { SiPhotobucket } from 'react-icons/si'
import { IoMdCloudUpload } from 'react-icons/io'
import Upload from '../../shared/Upload'
import '../../../styles/uploadButton.css'

function NewCategory() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('new category:', category)
    dispatch(createCategory({ name, description }))
  }

  return (
    <div>
      <h1>Δημιουργία νέας κατηγορίας</h1>

      <div className='card shadow-xl w-auto mx-auto'>
        <div className='card-body p-12'>
          <h2 className='card-title'>Νέα Κατηγορία</h2>

          <form className='form-control' onSubmit={onSubmit}>
            <label htmlFor='name' className='label'>
              <span className='label-text'>Όνομα</span>
            </label>
            <input
              type='text'
              placeholder='Όνομα κατηγορίας'
              className='input input-bordered'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* TODO - add onChange check if the category already exist or onSubmit */}
            <label htmlFor='description' className='label'>
              <span className='label-text'>
                Περιγραφή <span className='text-slate-500'>(Προαιρετικό)</span>
              </span>
            </label>
            <input
              type='text'
              placeholder='Όνομα κατηγορίας'
              className='input input-bordered'
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className='btn btn-outline w-fit mt-4 h-fit p-2'>
              <IoMdCloudUpload style={{ width: '2.5em', height: '2em' }} />
              <label className='cursor-pointer'>
                <span className='pl-4'>Προσθήκη φωτογραφίας</span>
                <input
                  type='file'
                  className='hidden'
                  name='image'
                  id='image'
                  value={Image}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>

            <button className='btn btn-outline btn btn-outline w-fit mt-4 h-fit p-2 place-self-end'>
              Δημιουργία
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewCategory
