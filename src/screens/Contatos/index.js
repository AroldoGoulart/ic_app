import React from 'react';
import {View, Text, TextInput, Image, Dimensions, FlatList, Pressable} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

function ContatosScreen(){
    const contatosProfessores = [
        {
            nomeProf: "Allan dos Santos",
            emailProf: "allan@ic.umft.br",
            numeroCel: "(65) 99634-8375"
        },
        {
            nomeProf: "Allan dos Santos",
            emailProf: "allan@ic.umft.br",
            numeroCel: "(65) 99634-8375"
        },
        {
            nomeProf: "Allan dos Santos",
            emailProf: "allan@ic.umft.br",
            numeroCel: "(65) 99634-8375"
        },
        {
            nomeProf: "Allan dos Santos",
            emailProf: "allan@ic.umft.br",
            numeroCel: "(65) 99634-8375"
        }
    ]
    const contatosCoordenadores = [
        {
            nomeProf: "Carlos Ueslei",
            emailProf: "carlos@ic.umft.br",
            numeroCel: "(65) 99291-3195"
        },
        {
            nomeProf: "Carlos Ueslei",
            emailProf: "carlos@ic.umft.br",
            numeroCel: "(65) 99291-3195"
        }
    ]
    return(
<>
    <ScrollView>

    <View
    
    style={{
        flex: 1,
        paddingHorizontal: 35
    }}
    >
        <View>
            <Text
            style={{
                fontSize: 23,
                fontWeight:'bold',
                color: "black"
            }}
            >
                Professores
            </Text>

            <FlatList
               data={contatosProfessores}
               renderItem={(contato) => {
                const { index, item } = contato
                return (
                    <TouchableOpacity
                    
                    style={{
                        backgroundColor: '#00008B',
                        borderRadius: 5,
                        marginBottom: 20,
                        height: 85,
                        width: 300,
                        top:8
                    }}
                    >
                        <Text
                        
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                            fontSize: 18,
                            fontWeight: 'bold',
                            top: 5
                        }}
                        >
                            {
                                item.nomeProf
                            }
                        </Text>

                        <Text
                        
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                            top: 18
                        }}
                        >
                            Email: {
                                item.emailProf
                            }
                        </Text>

                        <Text
                        
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                            top: 15
                        }}
                        >
                            Número: {
                                item.numeroCel
                            }
                        </Text>

                    </TouchableOpacity>
                )
               }}

            />


        </View>

        <View>
            <Text
            style={{
                fontSize: 23,
                fontWeight:'bold',
                color: "black"
            }}
            >
                Coordenadores
            </Text>

            <FlatList
               data={contatosCoordenadores}
               renderItem={(contato) => {
                const { index, item } = contato
                return (
                    <TouchableOpacity
                    
                    style={{
                        backgroundColor: '#00008B',
                        borderRadius: 5,
                        marginBottom: 20,
                        height: 85,
                        width: 300,
                        top:8
                    }}
                    >
                        <Text
                        
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                            fontSize: 18,
                            fontWeight: 'bold',
                            top: 5
                        }}
                        >
                            {
                                item.nomeProf
                            }
                        </Text>

                        <Text
                        
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                            top: 18
                        }}
                        >
                            Email: {
                                item.emailProf
                            }
                        </Text>

                        <Text
                        
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                            top: 15
                        }}
                        >
                            Número: {
                                item.numeroCel
                            }
                        </Text>

                    </TouchableOpacity>
                )
               }}

            />


        </View>

    </View>

    </ScrollView>
</>
    )

}

export default ContatosScreen