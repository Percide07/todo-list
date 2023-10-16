import { useState } from 'react';
import './ToDoList.css'
import Entry from './Entry'
import trash from '../assets/images/trash.png'
const Tasks =() => {
    const [list,setList] = useState([]);
    const addTasks = (todo)=>{
        const addT = {
            id : Math.random(),
            todo : todo,
        }
        // let array = [{Tasks}];
        // task.append(array);
        // catchValue = dis.value;
        // console.log(catchValue);
        // task.append(catchValue);
        // dis.value = '';
        console.log('Papa');
        }
    return(
        <div className='Tasks' id='task'>
            {list.map((todo)=> (
            <input type="checkbox" className='check'/>
            <p key={todo.id}> {todo.todo} </p>
            <img src={trash} alt="trash's image" /> 
            ))}
        </div>
    )
}
export default Tasks;