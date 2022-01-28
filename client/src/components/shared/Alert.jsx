import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import '../../styles/alert.css'
import { useEffect } from 'react'

function Alert({ variant, floating, children }) {
  const [type, setType] = useState({text: 'Ενημέρωση!', icon: 'info-circle'})
  const [show, setShow] = useState('')
  const [fadeOut, setFadeOut] = useState('')

  useEffect(() => {
    variant === 'success' ? (
      setType({text: 'Επιτυχία!', icon: 'check'})
    ) : variant === 'warning' ? (
      setType({text: 'Σημαντική Ενημέρωση!', icon: 'exclamation-triangle'})
    ) : variant === 'danger' ? (
      setType({text: 'Προσοχή!', icon: 'times-circle'})
    ) : setType({text: 'Ενημέρωση!', icon: 'info-circle'})
  }, [])

  //close alert window
  const closeAlert = () => {
    setFadeOut('fade-out-alert')
    setTimeout(() => {
      setShow('none')
    }, 950);
  }

  return (
    <>
      <div style={{display: `${show}`}} className={`alertCustom${`${floating}`} alertCustom-${variant} alertCustom-white rounded ${fadeOut}`}>
        <button type="button" className="close" onClick={closeAlert}>×</button>
        <div className="icon"><i className={`fa fa-${type.icon}`}></i></div>
        <strong>{type.text}</strong> {children}
      </div>
    </>
  )
}

Alert.defaultProps = {
  variant: 'info',
  floating: ''
}

Alert.propTypes = {
  variant: PropTypes.string,
}

export default Alert
