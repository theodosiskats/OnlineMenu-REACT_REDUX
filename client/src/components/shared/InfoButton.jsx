import PropTypes from 'prop-types'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'

function InfoButton({ title, text, placement }) {
  return (
    // TODO - bring it closer to the parent component and make position of icon button relative

    <OverlayTrigger
      trigger='click'
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header as='h3'>{title}</Popover.Header>
          <Popover.Body>
            <strong>Σημείωση:</strong> Check this info.
          </Popover.Body>
        </Popover>
      }>
      <Button variant=''>
        <i 
          className='fal fa-info-circle' 
          style={{
            color: '#146ebe'
            }}></i>
      </Button>
    </OverlayTrigger>
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
