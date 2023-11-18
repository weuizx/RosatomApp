import * as React from "react";
import { PieChart} from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

export default function PieChartComponent({dataPie,value}){
  return (
    <PieChart
      style={{ width: 150, height: 150 }}
      innerRadius={50}
      padAngle={0}
      data={dataPie}
    >
      <Text
        fill={'#333333'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={24}
        fontFamily="Roboto-700"
      >{value}</Text>
    </PieChart>
  );
}

