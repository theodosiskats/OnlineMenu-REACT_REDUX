import React from 'react'
import { useState } from 'react'
import { SiPhotobucket } from 'react-icons/si'
import Upload from '../../shared/Upload'
import '../../../styles/uploadButton.css'

function NewCategory() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('new category:', category)
    dispatch(createCategory({ name, description }))
  }

  return (
    <div>
      <h1>Δημιουργία νέας κατηγορίας</h1>

      <div className='card shadow-lg w-auto mx-auto'>
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
            />

            <label class='label'>
              <span class='label-text'>
                Φωτογραφία <span className='text-slate-500'>(Προαιρετικό)</span>
              </span>
            </label>
            <label htmlFor='uploadImageButton' class='input-group'>
              <span>Email</span>
              <input
                type='file'
                placeholder='info@site.com'
                class='input input-bordered'
              />
            </label>

            <input
              accept='image/*'
              id='icon-button-file'
              type='file'
              style={{ display: 'none' }}
            />
            <label htmlFor='icon-button-file'>
              <button>UPLOAD</button>
            </label>

            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              id='contained-button-file'
            />
            <label htmlFor='contained-button-file'>
              <Upload />
            </label>
            <div className='upload-btn-wrapper'>
              <button className='btn-upload'>Upload a file</button>
              <input type='file' name='myfile' />
            </div>

            <button className='btn btn-outline btn-neutral w-3/12 place-self-end mt-4'>
              Δημιουργία
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewCategory
