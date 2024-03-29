import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SPage, SText, STheme, SView } from 'servisofts-component';
import NavBar from '../../Components/NavBar';

class Barra extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        this.usuario = this.props.state.usuarioReducer?.usuarioLog;
        return (
            <SView col={"xs-12"} height={100} backgroundColor={STheme.color.barColor} style={{
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
            }} center>
                <SView width={100} height={71} style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 4,
                }}>
                    {/* <SIcon name={"YAHome"} /> */}
                    <SImage src={require("./logo.png")} width={100} />
                </SView>
                <SView width={80} height style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }} center onPress={() => {
                    NavBar.open();
                }}>
                    <SHr height={30} />
                    <SIcon name={"Menu2"} width={50} />
                </SView>

                <SView height col={"xs-5 md-8"} center>
                    <SView width={60} height={50} center>
                        <SView style={{
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: STheme.color.secondary,
                        }} width={40} height={40}>

                        </SView>
                    </SView>
                    <SText font={"Roboto"} bold secondary style={{
                    }} center>{this.usuario?.Nombres + " " + this.usuario?.Apellidos}</SText>
                </SView>
            </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Barra);