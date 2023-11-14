import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import MainStack from './navigate';
import LoadFonts from './styles/fonts';



export default function App() {
  return (
    <View style={styles.container}>
      <LoadFonts/>
      <MainStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

