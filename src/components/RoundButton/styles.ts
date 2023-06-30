import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    margin: 20,
    height: 30,
    width: 30,
    backgroundColor: COLORS.MEDIUM_MINT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,

    shadowColor: COLORS.LIGHT_SHADOW,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },

  text: {
    fontSize: 16,
    color: COLORS.WHITE_COLOR,
  },
});
