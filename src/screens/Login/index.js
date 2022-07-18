import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
function LoginScreen() {
  return (
    <View>
      <Text>Voce está no login</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>IR PARA HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
