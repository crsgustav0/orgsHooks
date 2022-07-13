import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { carregaTopo } from "../../../servicos/carregaDados";
import logo from '../../../assets/logo.png'

class Topo extends React.Component {
    
    // Definição e criação de objetos via state utilizado via Component
    state = {
        topo: {
            titulo: '',
            legenda: ''
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        // Alteração objeto criado via state
        this.setState({ topo: retorno })
    }

    componentDidMount() {
        this.atualizaTopo()
    }

    render() {
        return <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo}></Image>
            <Text style={estilos.titulo}>{this.state.topo.titulo}</Text>
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View >
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    titulo: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
        
    }
})

export default Topo