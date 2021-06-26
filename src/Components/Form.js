import React, {useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo , removeAllTodos , pageRefresh} from '../actions/index'
import TodoList from './TodoList'

function Form() {
    const [tfData , setTfData] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(tfData));
        setTfData('');
    }

    useEffect(() => {
        
        let Redtodos;
        if(localStorage.getItem('Redtodos') === null) {
            Redtodos = [];
        }
        else {
            Redtodos = JSON.parse(localStorage.getItem('Redtodos'));
        }

        dispatch(pageRefresh(Redtodos));
        
    }, [])

    return (
        <div className = "form--container">
            <form onSubmit= {handleSubmit} className="input-form">
                <input 
                    type= "text" 
                    name="tfData" 
                    onChange= {(e) => setTfData(e.target.value)} 
                    value={tfData}
                    placeholder="Add a new todo"
                />
                <button ><i className="fa fa-plus"></i></button>
            </form>
            <TodoList />
            <button className="clearall-btn" onClick={() => dispatch(removeAllTodos())}>Clear All</button>
        </div>
    );
}

export default Form
