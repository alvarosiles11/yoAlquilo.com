import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable2, SText, SView } from 'servisofts-component';
import usuario from '../index';
import Parent from '../index'
class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                { key: "Nombres", label: "Nombres", width: 150 },
                { key: "Apellidos", label: "Apellidos", width: 150 },
                { key: "Correo", label: "Correo", width: 150 },
                { key: "Password", label: "Password", width: 150 },
                { key: "key-editar", label: "Editar", width: 50, center: true, component: (item) => { return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: item }) }}> <SIcon name={"Edit"} width={35} /></SView> } },
                { key: "key", label: "Roles", width: 50, center: true, component: (item) => { return <SView onPress={() => { SNavigation.navigate("") }}> <SIcon name={"Ajustes"} width={35} /></SView> } },
            ]}
            data={data}
        />
    }
    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
        return (
            <SPage title={'Lista de '+Parent.component} disableScroll center>
                {this.getContent()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);