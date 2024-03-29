import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SForm, SLoad, SNavigation, SPage } from 'servisofts-component';
import inmueble from '..';

class registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key_inmueble");
    }
    getForm() {
        this.data = {};
        if (this.key) {
            this.data = inmueble.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        }


        return <SForm
            col={"xs-11 sm-10 md-8 lg-6 xl-4"}
            inputProps={{
                customStyle: "yoalquilo"
            }}
            inputs={{
                descripcion: { label: 'Descripcion', type: 'text', isRequired: true, defaultValue: this.data.descripcion },
                direccion: { label: 'Direccion', type: 'text', isRequired: true, defaultValue: this.data.direccion },
                tipo_inmueble: {
                    label: 'Tipo', type: 'select',

                    defaultValue: this.data?.tipo_inmueble ?? 'Casa', isRequired: true, options: [
                        { key: "Casa", content: "Casa" },
                        { key: "Edificio", content: "Edificio" },
                        { key: "Condominio", content: "Condominio" },
                        { key: "Hotel", content: "Hotel" },
                        { key: "Hostal", content: "Hostal" },
                        { key: "Alojamiento", content: "Alojamiento" },
                        { key: "Motel", content: "Motel" },
                    ]
                },
            }}
            onSubmitName={!this.key ? "registrar" : "editar"}
            onSubmit={(values) => {
                if (this.key) {
                    inmueble.Actions.editar({ ...this.data, ...values }, this.props);
                    // Parent.Actions.editar({ ...this.data, ...values }, this.props);
                } else {
                    inmueble.Actions.registro(values, this.props);
                    // Parent.Actions.registro(values, this.props);
                }
            }}
        />
    }

    render() {
        var reducer = inmueble.Actions._getReducer(this.props);
        if (reducer.estado == "exito" && (reducer.type == "registro" || reducer.type == "editar")) {
            reducer.estado = "";
            SNavigation.goBack();
        }
        return (
            <SPage title={"Registro"} center>
                {this.getForm()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);