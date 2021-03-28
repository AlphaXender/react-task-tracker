//We are gonna bring icons which are just the components of react - Here we imported FaTimes(X - icon) from react-icons-> fa(font awesome) library.
import { FaTimes } from 'react-icons/fa'


//This part below - <div className={`task ${task.reminder ? 'reminder' : ''}`} 
//adds a green reminder to the tasks in the UI
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} 
    onDoubleClick={() => onToggle(task.id)}>
      <h3>
      {task.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} 
      />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
  