//We imported the Header file which we created in the components - To include it in the function based component i.e. App
import Header from './components/Header'

//We imported the Tasks file which we created in the components - To include it in the function based component i.e. App
import Tasks from './components/Tasks'

//We imported the AddTask file which we created in the components folder - To include AddTask Form in the function based component i.e. App
import AddTask from './components/AddTask'

//To use state inside of a function we use a hook called useState impoted directly from react 
import { useState } from 'react'


//Function based components
const App = () => {
  //You can directly write javascript in here!!

  //Adding another piece of state in our App.js - if the value below is false then form's input boxes won't appear - We need to do something using a button to toggle this value on and off.
  const [showAddTask, setShowAddTask] = useState(false)

  //we would use setTasks to change any part of the state
  const [tasks,setTasks] = useState([
    {
      id: 1, 
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30',
      reminder: false,
    }
  ])

  //Add Task
  //Adds the task to our task tracker 
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  //.filter is a higher order array method which filter out the element whose id doesn't matches the id passed as input
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle Reminder 
  //This code just below changes the reminder value to the opposite value for the the task whose id is same as the input.
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  } 

  return (
    //We can add props such as 'title' inside the Header tag below - To retrieve these props inside the component in the Header file which is in the components folder, we pass 'props' in the arrow function.

    //We are gonna pass in an onDelete prop to Tasks component below.

    //We can take our tasks and pass in here as props.

    //Down below - <AddTask/> is imported from AddTask File to show the Add Task Form in the App

    //We are gonna pass in a prop - onAdd to the AddTask, which will call addTask which is in AddTask.js file

    //The Statement just below Header tag in the following div mean - If showAddTask is true then show that component - Now this is just a shorter way of doing turnary without an else

    //onAdd will toggle the value of showAddTask - and it needs to be passed as a prop in the header file 

    //showAdd will do something?? - and it needs to be passed as a prop in the header file 
    <div className='container'>
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;


//States get passed down
//Actions get passed up
