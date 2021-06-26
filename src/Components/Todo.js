import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {removeTodo , handleCheck} from '../actions/index';

function Todo(props) {
    const styles = {
        fontStyle: "italic",
        color: "#5f5f5f",
        textDecoration: "line-through"
    };

    const dispatch = useDispatch();

    return (
        <div className= "todo--item">
           <input 
            type="checkbox" 
            checked={props.item.checked}
            onChange={() => dispatch(handleCheck(props.item.id))}
            />
           <p style = {props.item.checked ? styles : null}>{props.item.value}</p>
           <button onClick={() => dispatch(removeTodo(props.item.id))}>
                <DeleteIcon />    
           </button> 
        </div>
    )
}

export default Todo