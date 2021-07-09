import React, { Component } from 'react'

class Formulario extends Component {
  InitialState = {
    titulo: '',
    responsable: '',
    prioridad: 'low',
  }
  state = this.InitialState

  handleChange = (event) => {
    const { name, value } = event.target
    console.log(value, name);
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    const { titulo, responsable } = this.state;
    let datoFalta = "";
    if (titulo == null || (titulo).length === 0 || /^\s*$/.test((titulo)) ||
      responsable == null || (responsable).length === 0 || /^\s*$/.test((responsable))) {
      if (titulo.length === 0) {
        datoFalta = "titulo"
      }
      if (responsable.length === 0) {
        datoFalta = "responsable"
      }
      if (titulo.length === 0 && responsable.length === 0) {
        datoFalta = "titulo y responsable"
      }
      alert("Por favor llene los campos requeridos falta el " + datoFalta)
    } else {
      this.props.handleSubmitProps(this.state)  //le envio datos
      this.setState(this.InitialState)     //despues estado vuelve a inicial
    }
  }

  render() {
    const { titulo, responsable, prioridad } = this.state;
    return (
      <div className="card">
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