import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import { PaymentScreen } from './src/screens/PaymentScreen';
import StylishSplashScreen from './src/screens/StylishSplashScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? '#000' : '#fff' },
        ]}
      >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000' : '#fff'}
        />
        {/* <HomeScreen /> */}
        {/* <PaymentScreen/> */}
        {/* <StylishSplashScreen /> */}
        {/* <LoginScreen/> */}
        {/* <OnboardingScreen /> */}
        <CategoriesScreen/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
