import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    backgroundColor: COLORS.MEDIUM_MINT,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

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
    fontSize: 20,
    color: COLORS.WHITE_COLOR,
  },
});
