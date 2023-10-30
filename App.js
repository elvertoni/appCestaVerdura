import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen'; // Importe o expo-splash-screen
import Cesta from './src/telas/Cestas';
import mocks from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  useEffect(() => {
    async function loadApp() {
      if (!fonteCarregada) {
        SplashScreen.preventAutoHideAsync(); // Evita que a tela de abertura seja ocultada automaticamente

        try {
          await SplashScreen.hideAsync(); // Oculta a tela de abertura quando o carregamento está completo
        } catch (e) {
          console.warn(e);
        }
      }
    }

    loadApp();
  }, [fonteCarregada]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mocks} />
    </SafeAreaView>
  );
}