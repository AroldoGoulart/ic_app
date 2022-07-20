import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';
import Logo from '../../images/calendario.jpg';
import Bell from '../../images/notificationbell.jpg';
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
        paddingHorizontal: 10,
        flex: 1
      }}
    > 
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <Image
        source={{
          uri: user.photo
        }}
        style = {{
            borderRadius: 500,
            width: 65,
            height: 65,
            marginRight: 10
        }}
        />
        <View>
          <Text 
          style={{
            color: 'black',
            fontSize: 22
          }}>
            {
              user.name
              
            }
            
          </Text>
          <Text style={{
            color: 'black',
            fontSize: 18
          }}>
            {
              user.rga
            }
          </Text>
        </View>
     
        
    </View>
     

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

      <TouchableOpacity
        style={{
        width: 80,
        height: 80,
        backgroundColor: '#000080',
        right:10,
        bottom: 20,
        position:'absolute',
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Image
        source={Logo}
        style = {{
            backgroundColor: '#000080',
            borderRadius: 500,
            width: 65,
            height: 65,
            
        }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
        width: 50,
        height: 50,
        backgroundColor: 'white',
        right:10,
        top: 20,
        position:'absolute',
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Image
        source={Bell}
        style = {{
            
            borderRadius: 500,
            width: 35,
            height: 35,
            
        }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
