import * as React from "react";
import { ProgressCircle } from 'react-native-svg-charts';
import {View} from "react-native";
import { Text } from 'react-native-svg'

export default function ProgressCircleComponent({percent,value}) {
  return (
    <View style={{width:150,height:150}}>
      <ProgressCircle
        style={{ height: 150 }}
        progress={percent}
        progressColor='#57B539'
        backgroundColor='#B50827'
        startAngle={-Math.PI}
        cornerRadius={0}
        strokeWidth={20}
        endAngle={Math.PI}
      >
        <Text
          fill={'#333333'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          fontFamily="Roboto-700"
        >{value}</Text>
      </ProgressCircle>
    </View>
  );
}
