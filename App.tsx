import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AddButton from './src/components/AddButton';
import { AddTodoForm } from './src/components/AddTodoForm';
import Navbar from './src/components/Navbar';
import Statistic from './src/components/Statistic';
import { TodoList } from './src/components/TodoList';
import { COLORS } from './src/constants/colors';
import { persistor, store } from './src/store/store';
import { styles } from './styles';

SplashScreen.preventAutoHideAsync();

NavigationBar.setButtonStyleAsync('dark');
NavigationBar.setBackgroundColorAsync(COLORS.LIGHT_MINT);

export default function App() {
  const [fontsLoaded] = useFonts({
    'Comfortaa-bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
  });

  const [openForm, setOpenForm] = useState(false);

  const openModal = () => {
    setOpenForm(true);
  };

  const closeModal = () => {
    setOpenForm(false);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar animated={true} backgroundColor={COLORS.LIGHT_MINT} barStyle="dark-content" />
          <Navbar />
          <Statistic />
          <AddButton onClick={openModal}>Add</AddButton>
          {openForm && <AddTodoForm close={closeModal} />}
          <TodoList />
        </View>
      </PersistGate>
    </Provider>
  );
}
