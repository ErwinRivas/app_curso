import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'

class PageNueva extends Component {

    navegarToPage = (path) => {
        this.props.history.push(path)
    }

    render() {
        const items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => { this.navegarToPage('/app_curso') },
            }
        ]
        return (
            <div>
                <div className="card">
                    <Menubar model={items} />
                </div>

                <div>esta es pagina de prueba</div>
            </div>
        )
    }
}

export default PageNueva