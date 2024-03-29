import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SImage, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import Parent from '../index'
import Usuario from '..';
import YoAlquilo from '../../../../../Components/YoAlquilo';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    getForm() {
        return <SForm
            ref={(ref) => { this.form = ref; }}
            props={{
                col: "xs-12",
            }}
            inputProps={{
                customStyle: "yoalquilo",
                separation: 16,
                backgroundColor: 'cyan',
                borderColor: 'blue'
            }}
            inputs={{
                usuario: {
                    placeholder: "Ingresar e-mail",
                    isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "email", autoFocus: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.focus("password");
                        }
                    },
                    icon: <SIcon name={"InputEmail"} width={40} height={30} />
                },
                password: {
                    placeholder: "Ingresar contraseña",
                    type: "password", isRequired: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.submit();
                        }
                    },
                    icon: <SIcon name={"InputPassword"} width={40} height={30} />
                },
            }}
            onSubmit={(data) => {
                if (data) {
                    Parent.Actions.login(data, this.props);
                }
            }}
        />
    }

    render() {
        var error = Parent.Actions.getError("login", this.props);
        if (error) {
            SPopup.alert("Usuario no encontrado, Verifique sus datos.");
        }
        if (this.props.state.usuarioReducer.type == "login") {
            this.props.state.usuarioReducer.type = "";
            if (Parent.Actions.validateSession(this.props, true)) {
                SNavigation.replace('/');
                return null;
            }
        }
        if (Parent.Actions.validateSession(this.props, true)) {
            SNavigation.replace('/');
            return null;
        }

        return (
            <SPage title={'Login ' + Parent.component} center hidden>
                <SView center col={"xs-12"}>
                    <SView col={"xs-11 md-6 xl-4"} center  >
                        <SHr height={32} />
                        <SView col={"xs-11"} height={140}>
                            {/* <SIcon name={"Off"} /> */}
                            <SImage src={require("../../../../../Assets/img/logoCuadrado.png")} />
                        </SView>
                        <SView height={32} />
                        {this.getForm()}
                        <SView height={16} />
                        <SView col={"xs-12"} flex height style={{ alignItems: "flex-end" }}>
                            <SText fontSize={14} color={STheme.color.lightBlack} font={"Roboto"} onPress={() => { SNavigation.navigate(Parent.component + '/recuperarContrasena'); }}>¿Olvidaste tu email o contraseña?</SText>
                        </SView>
                        <SView height={30} />
                        <SView col={"xs-11"} row center>

                            <YoAlquilo.YoAlquiloButtom onPress={() => {
                                this.form.submit();
                            }}>INICIAR</YoAlquilo.YoAlquiloButtom>





                        </SView>
                        <SView height={30} />
                        <SView col={"xs-11"} height={40} row center  >
                            <SView col={"xs-3"} height center>
                                <SHr color={STheme.color.lightGray} height={1.5} ></SHr>
                            </SView>
                            <SView col={"xs-6"} height center>
                                <SText fontSize={14} color={STheme.color.lightGray + 100} font={"Roboto"}> o Iniciar sesión con  </SText>
                            </SView>
                            <SView col={"xs-3"} height center>
                                <SHr color={STheme.color.lightGray} height={1.5} ></SHr>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} height={100} row center  >
                            <SView col={"xs-2"} height center>
                            </SView>

                            <SView flex center height={60} >
                                <SView height={50} colSquare center style={{
                                    backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 2, padding: 8
                                }}
                                    onPress={() => { SNavigation.navigate('faceb'); }}>
                                    <SIcon name={"IconFaceb"} />

                                </SView>
                            </SView>

                            <SView flex center height={60} >
                                <SView height={50} colSquare center style={{
                                    backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 2, padding: 8
                                }}
                                    onPress={() => { SNavigation.navigate('faceb'); }}>
                                    <SIcon name={"IconGoogle"} />

                                </SView>
                            </SView>

                            <SView col={"xs-2"} height center>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} height={50} row center  >
                            <SView flex center height={20} row>
                                <SText fontSize={14} color={STheme.color.lightBlack} font={"Roboto"} >¿No tienes una cuenta?  </SText>
                                <SText fontSize={14} color={STheme.color.primary} font={"Roboto"} onPress={() => { SNavigation.navigate(Parent.component + '/registro'); }}>REGISTRAR</SText>


                            </SView>
                        </SView>
                        <SView height={60} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Login);