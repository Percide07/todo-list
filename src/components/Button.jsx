import './ToDoList.css'
import del from '../assets/images/del.png'
const Button = () => {
    return(
        <div>
            <button id='btn'><img src={del} alt="delete's image" />Delete All</button>
        </div>
    )
}
export default Button;