import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { SImage } from 'servisofts-component';
//import Gradient from './Gradient'
import BackgroundGradient from './backgroundGradient'
type type = {
    source: Object,
    contraste: String

}
export default class BackgroundImage extends Component<type> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getBackground = () => {
        var source = this.props.source;
        if (!source) {
            source = require("./background.png");
        }
        return <View style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            // opacity: 0.8,
            // backgroundColor: "#000",
            ...this.props.style,
        }}>
            {/* <BackgroundGradient style={{ 
                width: "100%",
                height: "100%",
                resizeMode: "fill",
                
                }}/> */}

            {/* <SImage src={source} style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                opacity: 0.6,
            }} />  */}

            {/* <View style={{
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                opacity: (0.7 + (Platform.OS == "web" ? -0.2 : 0)),
                backgroundColor: (this.props.contraste ? this.props.contraste : "#00000044")
            }}>

            </View> */}
        </View>
    }
    render() {
        // if (!this.props.source) {
        //     return <View />
        // }
        return this.getBackground()
    }
}
