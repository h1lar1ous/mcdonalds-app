import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { COLORS } from './constants';
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Popular from './src/components/Popular';
import constants from './constants'
import Copyright from './src/components/Copyright';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: COLORS.black}}>
      <View style={{padding: 24, paddingTop: 50, paddingBottom: 95, backgroundColor: COLORS.black}}>
      <StatusBar style="auto" />
      <Header />
      <Categories />
      <Popular />
      <Copyright />
    </View>
    </ScrollView>
  );
}
