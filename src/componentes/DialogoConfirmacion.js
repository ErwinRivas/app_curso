import React, { Component } from 'react'

import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

class DialogoConfirmacion extends Component {

    handleVisibleDialog = () => {
        this.props.visibleDialog(false)
    }

    accept = () => {
        this.toast.show({ severity: 'info', summary: 'Confirmado', detail: 'Ingresar datos faltantes', life: 3000 });
    }

    render() {
        const { visible } = this.props
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />
                <ConfirmDialog visible={visible}
                    onHide={this.handleVisibleDialog}
                    message="Faltan campos por llenar, favor completa la información"
                    header="Confirmación" icon="pi pi-exclamation-triangle" accept={this.accept}
                    rejectLabel
                />
            </div>
        )
    }
}

export default DialogoConfirmacion