//To use state inside of a function we use a hook called useState impoted directly from react 
import {useState} from 'react'

//This arrow function was created using rafce command and this piece of code makes a form - all the className have something to do with styling in the index.css sheet

//We are gonna take in onAdd in AddTask component
const AddTask = ({onAdd}) => {

  //These code just below takes input and updates the state
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  //onSubmit is gonna take in the event object, e.preventDefault stops it to submit to the page.
  const onSubmit = (e) => {
    e.preventDefault()
   
    if(!text){
      alert('Please add a task')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
     
  }

  //The code below takes value from the states and updates the values 

  //Initializing an event onSubmit in the form below which is defined above
  return (
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' 
        value ={text} 
        onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time'
        value ={day} 
        onChange={(e) => setDay(e.target.value)}/>
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' 
        checked = {reminder}
        value ={reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' placeholder='Save Task'
      className='btn btn-block'/>
    </form>
  )
}

export default AddTask
