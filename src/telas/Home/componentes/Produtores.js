import React, { useEffect, useState } from "react";

import { StyleSheet, FlatList, Text } from "react-native";

import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores({ topo: Topo }) {
    /*
        Necessário utilizar no inicio da aplicação sendo especifico
        para cada valor que será alterado, atualizado
    */
    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState([])

    useEffect(() => {
        const retorno = carregaProdutores()
        setTitulo(retorno.titulo)
        setLista(retorno.lista)

    },
        []
    )

    const TopoLista = () => {
        return <>
            <Topo></Topo>
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }


    return <FlatList
        data={lista}
        renderItem={({ item: { nome } }) => <Text>{nome}</Text>}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
})