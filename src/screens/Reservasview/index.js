import React, { useState } from 'react';
import { SafeAreaView, View,TextInput, FlatList, StyleSheet,Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';
import Voltar from '../../images/voltar.jpg';

import RNPickerSelect from 'react-native-picker-select';

function ReservationCancelScreen(){
    
    const [data, setData] = useState()
    const [horaInicio, setHoraInicio] = useState()
    const [horaFim, setHoraFim] = useState()
    const {
        user,
        signIn
        
      } = useAuth()
    const salas = [
        {
            label: 'lab4',
            value: 'lab4'
        },
        {
            label: 'lab2',
            value: 'lab2'
        },
        {
            label: 'lab5',
            value: 'lab5'
        }

    ]
    
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                position:'absolute',
                marginEnd:5,
                borderRadius: 500,
                alignItems: 'center'
            }}
            >
                <Image
                source={Voltar}
                style = {{
                    
                    borderRadius: 500,
                    width: 35,
                    height: 35,
                    
                }}
                />
            </TouchableOpacity>
            <Text 
            style={{ 
                color: 'black',
                fontSize: 20,
                marginTop:10 ,
                left:60
                }}   >

                Visualizar reserva
            </Text>
            <Text 
                style={{ 
                color: 'black',
                fontSize: 20,
                fontWeight:'700',
                marginTop:10 ,
                left:30
                }}      
            > 
                Selecione uma sala 
            </Text>
               <View style={{flex:1, 
                            padding: 0, 
                            marginTop: 5,
                            marginBottom:10,
                            width:300,
                            left:30,
                            }} >
                <RNPickerSelect 
                onValueChange={(value) => console.log(value)}
                items={salas}           
                />
                </View>
                
             <Text 
                style={{ 
                color: 'black',
                fontSize: 20,
                fontWeight:'700', 
                marginTop:40,
                left:30
                }}      
            > 
                Dia 
            </Text>
            <View
             
            style = {{
                alignItems: 'center'
            }}
            >
            <TextInput
                style={{
                    backgroundColor: '#dcdcdc',
                    width:350,
                    height:45,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    margin:10,
                    fontSize:15,
                    fontWeight:'900'
                }}
                maxLength={11}
                keyboardType = 'number-pad'
                onChangeText={(text) => {
                    setData(Number.parseInt(text))
                }}
                value={data}
                placeholder="dia/mes/ano"
            />
            </View>
                <Text 
                    style={{ 
                    color: 'black',
                    fontSize: 20,
                    fontWeight:'700', 
                    left:30
                    }}      
                > 
                    Horario inicio 
                </Text>        
            <View 
                style = {{
                    alignItems: 'center'
                }}
                >
            <TextInput
                style={{
                    backgroundColor: '#dcdcdc',
                    width:350,
                    height:45,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    margin:10,
                    fontSize:15,
                    fontWeight:'900'
                }}
                maxLength={11}
                keyboardType = 'number-pad'
                onChangeText={(text) => {
                    setHoraInicio(Number.parseInt(text))
                }}
                value={horaInicio}
                placeholder="hora:minuto"
            />
            </View>        
                <Text 
                    style={{ 
                    color: 'black',
                    fontSize: 20,
                    fontWeight:'700', 
                    left:30
                    }}      
                > 
                    Horario fim
                </Text>        
            <View 
                style = {{
                    alignItems: 'center'
                }}
                >
            <TextInput
                style={{
                    backgroundColor: '#dcdcdc',
                    width:350,
                    height:45,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    margin:10,
                    fontSize:15,
                    fontWeight:'900'
                }}
                maxLength={11}
                keyboardType = 'number-pad'
                onChangeText={(text) => {
                    setHoraFim(Number.parseInt(text))
                }}
                value={horaFim}
                placeholder="hora:minuto"
            />
            </View>      
                 
            <Text 
                style={{ 
                color: 'black',
                fontSize: 15,
                left:30
                }}      
            > 
                Periodo maximo de duração é definido como 5 horas
            </Text>   
            <View 
            style={{ 
                marginTop:50
                }}    
            >      
            <Text 
                style={{ 
                color: 'black',
                fontSize: 17,
                fontWeight:'700',
                left:30
                }}      
            > 
                Alunos
            </Text>    
            </View> 
            <View
            style = {{
                marginTop:10
            }}
            >  
            <Text 
                style={{ 
                color: 'black',
                fontSize: 17,
            
                left:30
                }}      
            > 
                {user.email}
            </Text>     
            </View>   
            <TouchableOpacity 
                style={{
                    width: 100,
                    height: 50,
                    marginRight: 15,
                    marginVertical: 5,
                    borderRadius: 5,
                    right:0,
                    bottom: -60,
                    position:'absolute',
                    justifyContent:'center',
                    alignItems: 'center'
                }}
                >
      
                <Text style = {{ 
                    textAlign:'center',
                    color: 'blue',
                    fontSize: 17
                }}>
                    Ver todos
                </Text>
            </TouchableOpacity>
            <View
            style = {{
                bottom:-10,
                justifyContent:'center',
                alignItems: 'center'
            }}
            >
                <TouchableOpacity 
                    style={{
                        width: 360,
                        height: 45,
                        marginRight: 15,
                        marginVertical: 5,
                        backgroundColor:'#00008B',
                        borderRadius: 5,
                        bottom: -100,
                        position:'absolute',
                        justifyContent:'center',
                        alignItems: 'center'
                    }}
                    >
        
                    <Text style = {{ 
                        textAlign:'center',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: 25
                    }}>
                        Cancelar Reservar
                    </Text>
                </TouchableOpacity>  
            </View>     
        </SafeAreaView>
        
        )

}

export default ReservationCancelScreen;

