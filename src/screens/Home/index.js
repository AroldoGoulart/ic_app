import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';

const AcessoRapido = [
  {

    route:'',
    title: 'Calendario',
  },
  {

    route:'',
    title: 'Planilha de Horario',
  },
];
const Contato = [
  {

    route:'',
    title: 'FAQ',
  },
  {

    route:'',
    title: 'Coordenação',
  },
];
const Salas = [
  {

    route:'',
    title: 'Reserva',
  },
  {
    route:'',
    title: 'Reportar',
  },
];

function HomeScreen() {
  const {
    user,
    signIn
  } = useAuth()
  const Auxiliar = ({ title }) => (
    <TouchableOpacity 
      style={{
        width: 130,
        height: 130,
        backgroundColor: '#e08748',
        marginRight: 15,
        marginVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style = {{ 
        textAlign:'center',
        color: 'white',
        fontSize: 20
       }}>
        {title}
       </Text>
    </TouchableOpacity>
  );

  const renderCoisas = ({ item }) => (
    <Auxiliar title={item.title} />
  )

  return (
    <SafeAreaView 
      style={{
        paddingHorizontal: 10
      }}
    >
      <Text>
        {
          user.name
        }
      </Text>
      <Text 
        style={{ 
          color: 'black',
          fontSize: 25,
          fontWeight:'700' 
      }}      
        > 
        Acesso rapido 
      </Text>

      <FlatList
        data={AcessoRapido}
        horizontal
        renderItem={renderCoisas}
      />

      <Text 
        style={{ 
        color: 'black',
        fontSize: 25,
        fontWeight:'700' 
      }}
      >
        Contato
      </Text>

      <FlatList
        data={Contato}
        horizontal
        renderItem={renderCoisas}
      />

      <Text style = {{ 
        color: 'black',
        fontSize: 25,
        fontWeight:'700' }}> Salas </Text>
       <FlatList
        data={Salas}
        horizontal
        renderItem={renderCoisas}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
