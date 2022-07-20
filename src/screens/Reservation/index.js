import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';

import RNPickerSelect from 'react-native-picker-select';

function ReservationScreen(){
    const [selected, setSeleted] = useState()
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
            <Text 
                style={{ 
                color: 'black',
                fontSize: 25,
                fontWeight:'700' 
                }}      
            > 
                Selecione uma sala 
            </Text>

            <RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
        </SafeAreaView>
        
        )

}

export default ReservationScreen;

