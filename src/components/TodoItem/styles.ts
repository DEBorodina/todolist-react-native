import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    minHeight: 100,
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
    shadowColor: COLORS.LIGHT_GREY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.48,
    shadowRadius: 5,

    elevation: 12,
  },

  text: {
    fontSize: 14,
    color: COLORS.DARK_MINT,
    flex: 70,
  },

  buttons: {
    flexDirection: 'row',
    flex: 30,
  },

  button: {
    margin: 5,
  },

  circle: {
    width: 20,
    height: 20,
    borderColor: COLORS.WHITE_COLOR,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
