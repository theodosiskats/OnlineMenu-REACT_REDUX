import PropTypes from 'prop-types'
import Popper from '@mui/material/Popper';

function InfoButton({ title, text, placement }) {
  return (
    // TODO - bring it closer to the parent component and make position of icon button relative
    <>
      <Popper
        placement='left'
        disablePortal={false}
        modifiers={[
          {
            name: 'flip',
            enabled: true,
            options: {
              altBoundary: true,
              rootBoundary: 'viewport',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: false,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'arrow',
            enabled: true,
            options: {
              element: arrowRef,
            },
          },
        ]}
      >Test</Popper>
    </>
  )
}

InfoButton.defaultProps = {
  title: 'Helper',
  text: 'Helping Information goes here',
  placement: 'right',
}

InfoButton.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  placement: PropTypes.string,
}

export default InfoButton
