import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <View style={estilos.container}>
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome}></Image>
        <View style={estilos.informacoes}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 6,
        //Android
        elevation: 4,
        //Ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62

    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 8,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        color: '#464646',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
        fontSize: 15,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
        color: '#464646',
    }

})