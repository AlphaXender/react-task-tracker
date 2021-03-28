import PropTypes from 'prop-types'

//We could take in the props object but I am gonna destructure that object and just gonna take the members instead.
const Button = ({color, text, onClick }) => {
  return (
    //Adding an Event on this button
    <button 
    onClick={onClick}
    style={{backgroundColor: color}} className='btn'>
    {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
 