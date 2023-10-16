import { useState } from 'react';
import './ToDoList.css';
import Tasks from './Tasks';
import cross from '../assets/images/cross.png';

const Entry =() => {
    const [initial,setInitial] = useState("");
    // select the element
    // const add = document.querySelector('#addElement');
    // const dis = document.querySelector('#dis');
    // const task = document.querySelector('#task');
    return(
        <div className='Entry'>
            <input type="text" className='display' id='dis' value={int} 
            onChange={(e) => setInt(e.target.value)}/>
            <img src={cross} alt="cross's image" id='addElement' onClick={addTasks(int)}/>
        </div>
        
    )
}
export default Entry;
