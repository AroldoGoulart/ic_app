import React from 'react';
import {View, Text, TextInput, Image, Dimensions, FlatList, Pressable} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

function ReservaScreen(){
    const reservasHoje = [
        { 
            sala: 'lab 43',
            subnome: 'blabla',
            nome_aluno: 'LUAN',
            dia: 10,
            horario_inicio: '10:30',
            horario_fim: '11:30'
        },
        { 
            sala: 'lab 43',
            subnome: 'blabla',
            nome_aluno: 'LUAN',
            dia: 10,
            horario_inicio: '10:30',
            horario_fim: '11:30'
        },
        { 
            sala: 'lab 43',
            subnome: 'blabla',
            nome_aluno: 'LUAN',
            dia: 10,
            horario_inicio: '10:30',
            horario_fim: '11:30'
        },
        { 
            sala: 'lab 43',
            subnome: 'blabla',
            nome_aluno: 'LUAN',
            dia: 10,
            horario_inicio: '10:30',
            horario_fim: '11:30'
        },
        { 
            sala: 'lab 43',
            subnome: 'blabla',
            nome_aluno: 'LUAN',
            dia: 10,
            horario_inicio: '10:30',
            horario_fim: '11:30'
        },
        

    ]
    return (
<>
    <ScrollView>
        
    <View

    style={{
        flex:1,
       paddingHorizontal: 15
    }}
    >
        <View>
            <Text

            style={{
                fontSize: 30,
                color: "black",
                fontWeight: "bold"
            }}
            >
                Reservas hoje
            </Text>

            <FlatList
                data={reservasHoje}
                renderItem={(reserva) => {
                    const { index, item } = reserva
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#00008B',
                                borderRadius: 5,
                                marginBottom: 20,
                                height: 95
                            }}
                        >
                            <Text
                            
                            style={{
                                color: "white",
                                fontSize: 25,
                                paddingHorizontal: 15
                            }}
                            >
                                {
                                    item.sala
                                }  
                            </Text>

                            <Text
                            
                            style={{
                                color: "white",
                                fontSize: 15,
                                paddingHorizontal: 15
                            }}
                            >
                                {
                                    item.subnome
                                }  
                            </Text>

                            <Text
                            
                            style={{
                                color: "white",
                                fontSize: 15,
                                paddingHorizontal: 15,
                                top: 15
                            }}
                            >
                                {
                                    item.nome_aluno
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
                fontSize: 30,
                color: "black",
                fontWeight: "bold"
            }}
            >
                Próximos dias
            </Text>

            <FlatList
                data={reservasHoje}
                renderItem={(reserva) => {
                    const { index, item } = reserva
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#00008B',
                                borderRadius: 5,
                                marginBottom: 20,
                                height: 80
                            }}
                        >
                            <Text
                            
                            style={{
                                color: "white",
                                fontSize: 25,
                                paddingHorizontal: 15
                            }}
                            >
                                {
                                    item.sala
                                }
                            </Text>
                        </TouchableOpacity>
                     
                    )

                }}
            />
        </View>

      

    </View>
       
    </ScrollView>
    <Pressable
            onPress={() => alert('ok')}
            style={{
                position: 'absolute',
                width: 70,
                height: 70,
                borderRadius: 500,
                zIndex: 10,
                bottom: 20,
                right: 10,
                backgroundColor:'blue',
                justifyContent:  'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: 'white'
            }}
        >
            <Text
            
            style={{
                color: "white",
                fontSize: 45
            }}
            >
                +
            </Text>

        </Pressable>
</>
        
    )
}

export default ReservaScreen