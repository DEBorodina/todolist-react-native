import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  form: {
    position: 'relative',
    backgroundColor: COLORS.WHITE_COLOR,
    width: '80%',
    height: 400,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: COLORS.LIGHT_GREY,
    borderWidth: 0.5,
    borderStyle: 'solid',
  },

  title: {
    fontSize: 26,
    color: COLORS.DARK_MINT,
  },

  textInput: {
    borderColor: COLORS.LIGHT_GREY,
    borderWidth: 0.5,
    borderStyle: 'solid',
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 10,
    width: '90%',
    color: COLORS.DARK_MINT,
    fontFamily: 'Comfortaa-bold',
    fontSize: 16,
  },

  cross: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
