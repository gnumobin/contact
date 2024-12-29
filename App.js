import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import StackNavigation from './pages/StackNavigation';

export default function App() {
  return <NavigationContainer >
    <StackNavigation />
    <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
  </NavigationContainer>
}