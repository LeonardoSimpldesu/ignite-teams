import { Loading } from '@components/Loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })



  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </>
  );
}

