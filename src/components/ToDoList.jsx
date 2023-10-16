import Entry from './Entry';
import Tasks from './Tasks';
import Button from './Button';
import './ToDoList.css'
const ToDoList = () => {
    return(
        <div className='ToDOList'>
            <Entry/>
            <Tasks/>
            <Button/>
        </div>
    )
}
export default ToDoList;