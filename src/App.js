import React from 'react'
import Form from './Components/Form'
import {Provider} from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <div className="heading">
                    <h1>Todo List</h1>
                </div>
                
                <Form />
            </div>
        </Provider>
    )
}

export default App
