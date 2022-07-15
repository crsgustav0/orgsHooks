import React, {
    useReducer,
    useMemo
} from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

const metrosDistancia = (distancia) => {
    console.log(`${distancia}m`) 
    return `${distancia}m`
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )

    const textoDistancia = useMemo(()=>
     metrosDistancia(distancia),
     [distancia]
     )

    return <TouchableOpacity
        style={estilos.container}
        onPress={inverterSelecionado}
    >
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome}></Image>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                ></Estrelas>
            </View>
            <Text style={estilos.distancia}>{textoDistancia}</Text>
        </View>
    </TouchableOpacity >
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
    cartao: {

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