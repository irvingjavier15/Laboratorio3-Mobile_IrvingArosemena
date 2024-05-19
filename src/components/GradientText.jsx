import React from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export default function GradientText(props){
  return (
    <MaskedView maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>}>
      <LinearGradient
          start={{x:1, y:0}}
          end={{x:0, y:1}}
          colors={['#5648FB', '#00FF99']}
      >
        <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
