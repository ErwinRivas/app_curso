import React, { Component } from 'react'
import { todos } from './todos.json'
import Formulario from './componentes/Formulario'
import './index.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { InputText } from 'primereact/inputtext'



// shit alt f margen al codigo

class App extends Component {
    initialState = {
        todos
    }
    state = this.initialState

    handleSubmitProps = (todo) => {
        this.setState({ todos: [...this.state.todos, todo] })
    }

    removeCharacter = (index) => {
        const { todos } = this.state
        this.setState({
            todos: todos.filter((todo, i) => {
                return i !== index
            }),
        })

    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4" key={i} >
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{todo.titulo}</h3>
                            <span>
                                {todo.prioridad}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.responsable} </p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger"
                                onClick={this.removeCharacter.bind(this, i)}> BORRAR

                            </button>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="" className="text-white">TAREAS
                        <span className="span-css">
                            {this.state.todos.length}
                        </span>
                    </a>
                </nav>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3 mt-4">
                            <Formulario handleSubmitProps={this.handleSubmitProps} />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )   // props
    }
}

export default App