//It's convention to create a Header file in the components folder with a capital H.

//This(Prop Types) you don't have to use but if you use it, it will make your code more Robust. We won't make prop types for everything, just gonna show how it works.
import PropTypes from 'prop-types'

//We imported the Button file which we created in the components - To include it in the function based component 
import Button from './Button'

//Using rafce from the extension ES7 React/Redux/GraphQL/React-Native snippets to create a boiler plate of an arrow function component.

//Here onAdd is passed in as a prop which is defined in App.js - It toggles the value of a function

//Here showAdd is passed in as a prop which is defined in App.js - It changes the color and the text on the onAdd button
const Header = ({title, onAdd, showAdd}) => {
  

  return (
    //To add buttons we need to add a file Button.js in the components folder.
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'Red':'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}


//If no props are added in App.js file then by default the following prop would be used else it would be overwritten
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//For designing we can use style sheet or can also use style components which are an external package or you can use direct css in JavaScript.

// CSS in JS 
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
//} 


export default Header

