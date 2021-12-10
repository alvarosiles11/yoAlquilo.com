import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import Parent from '../index'
import Usuario from '..';
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
                customStyle: "kolping",
                separation: 16,
            }}
            inputs={{
                usuario: {
                    placeholder: "E-mail",
                    isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "email", autoFocus: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.focus("password");
                        }
                    },
                    icon: <SIcon name={"InputEmail"} width={40} height={30} />
                },
                password: {
                    placeholder: "Contraseña",
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
        if (Parent.Actions.validateSession(this.props,true)) {
            SNavigation.replace('/');
            return null;
        }
       
        return (
            <SPage title={'Login ' + Parent.component} center hidden>
                <SView center col={"xs-12"}>
                    <SView col={"xs-11 md-6 xl-4"} center  >
                        <SView col={"xs-11"} height={140}>
                            <SIcon name={"Logo"} />
                        </SView>
                        <SView height={32} />
                        {this.getForm()}
                        <SView height={16} />

                        <SView col={"xs-12"} flex height style={{ alignItems: "flex-end" }}>
                            <SText fontSize={14} color={STheme.color.lightBlack} font={"LondonMM"} onPress={() => { SNavigation.navigate(Parent.component + '/recuperarContrasena'); }}>¿Olvidaste tu email o contraseña?</SText>
                        </SView>

                        <SView height={30} />
                        <SView col={"xs-11"} row center>
                            <SButtom onPress={() => {
                                this.form.submit();
                            }}>INICIAR</SButtom>
                            {/* <SButtom style={{ backgroundColor: STheme.color.primary, width: '100%', fontSize: 14, borderRadius: 8, }} onPress={() => {
                                this.form.submit();
                            }} ></SButtom> */}
                        </SView>
                        <SView height={30} />
                        <SView col={"xs-11"} height={40} row center  >
                            <SView col={"xs-3"} height center>
                                <SHr color={STheme.color.lightGray} height={1.5} ></SHr>
                            </SView>
                            <SView col={"xs-6"} height center>
                                <SText fontSize={14} color={STheme.color.lightGray + 100} font={"LondonMM"}> o Iniciar sesión con  </SText>
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
                                    <SIcon name={"IconGoogle"} />
                                </SView>
                            </SView>
                            <SView flex center height={60} >
                                <SView height={50} colSquare center style={{
                                    backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 2, padding: 8
                                }}
                                    onPress={() => { SNavigation.navigate('faceb'); }}>
                                    <SIcon name={"IconFaceb"} />
                                </SView>
                            </SView>
                            <SView col={"xs-2"} height center>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} height={50} row center  >
                            <SView flex center height={20} row>
                                <SText fontSize={14} color={STheme.color.lightBlack} font={"LondonMM"} >¿No tienes una cuenta?  </SText>
                                <SText fontSize={14} color={STheme.color.primary} font={"LondonMM"} onPress={() => { SNavigation.navigate(Parent.component + '/registro'); }}>REGISTRAR</SText>
                            </SView>
                        </SView>
                        <SView height={30} />
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