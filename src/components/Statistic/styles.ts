import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 120,
    width: '90%',
    marginVertical: 10,
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
    fontSize: 26,
    color: COLORS.DARK_MINT,
    marginRight: 70,
  },
});

export const chartConfig = {
  backgroundGradientFrom: COLORS.WHITE_COLOR,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: COLORS.WHITE_COLOR,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(14, 131, 136, ${opacity})`,
};
