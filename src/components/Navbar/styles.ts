import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  text: {
    color: COLORS.DARK_MINT,
    fontSize: 32,
  },
});
