import React, { Component } from 'react'
import DialogoConfirmacion from './DialogoConfirmacion'
import { InputText } from 'primereact/inputtext';

class Formulario extends Component {
  InitialState = {
    titulo: '',
    responsable: '',
    prioridad: 'low',
    visible: false,
  }
  state = this.InitialState

  handleChange = (event) => {
    const { name, value } = event.target
    console.log(value, name);
    this.setState({
      [name]: value,
    })
  }
  visibleDialog = (visible) => {
    this.setState(visible)
  }

  submitForm = () => {
    const { titulo, responsable } = this.state;
    let datoFalta = "";
    if (titulo == null || (titulo).length === 0 || /^\s*$/.test((titulo)) ||
      responsable == null || (responsable).length === 0 || /^\s*$/.test((responsable))) {
        this.setState({
          visible:true
        })
    } else {
      this.props.handleSubmitProps(this.state)  //le envio datos
      this.setState(this.InitialState)     //despues estado vuelve a inicial
    }
  }

  render() {
    const { titulo, responsable, prioridad,visible } = this.state;
    return (

      <div className="card">
        <DialogoConfirmacion visible= {visible} visibleDialog = {this.visibleDialog} />
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              value={titulo}
              onChange={this.handleChange}
              placeholder="Titulos"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              name="responsable"
              className="form-control"
              value={responsable}
              onChange={this.handleChange}
              placeholder="Responsable"
            />
          </div>
          <div className="form-group mt-3">
            <select
              name="prioridad"
              className="form-control"
              value={prioridad}
              onChange={this.handleChange}
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary mt-4" value="Submit" onClick={this.submitForm}>
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default Formulario;