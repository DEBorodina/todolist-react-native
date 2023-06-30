import React from 'react';
import { View } from 'react-native';

import AppText from '../AppText';
import { styles } from './styles';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Todo list</AppText>
    </View>
  );
};

export default Navbar;
